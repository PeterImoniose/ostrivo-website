// Interactive CV: scroll effects, before/after toggles, project and skill filters.
(function () {
    'use strict';

    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Print / save as PDF
    $$('[data-print]').forEach(b => b.addEventListener('click', () => window.print()));

    // Job durations, e.g. "1 yr 6 mos"
    const now = new Date();
    $$('.dur[data-start]').forEach(el => {
        const [sy, sm] = el.dataset.start.split('-').map(Number);
        let ey, em;
        if (el.dataset.end === 'present') { ey = now.getFullYear(); em = now.getMonth() + 1; }
        else { [ey, em] = el.dataset.end.split('-').map(Number); }
        const months = (ey - sy) * 12 + (em - sm) + 1;
        if (months < 1) return;
        const y = Math.floor(months / 12), m = months % 12;
        const parts = [];
        if (y) parts.push(y + (y === 1 ? ' yr' : ' yrs'));
        if (m) parts.push(m + (m === 1 ? ' mo' : ' mos'));
        el.textContent = parts.join(' ');
    });

    // Count-up numbers
    function countUp(el) {
        const target = Number(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        if (reduceMotion || target <= 1) { el.textContent = target + suffix; return; }
        const t0 = performance.now(), dur = 1100;
        (function tick(t) {
            const p = Math.min(1, (t - t0) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (p < 1) requestAnimationFrame(tick);
        })(t0);
    }

    // Things that animate once when they come into view
    const once = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            const el = e.target;
            if (el.classList.contains('reveal')) el.classList.add('is-visible');
            if (el.classList.contains('cvx-stats')) $$('.num', el).forEach(countUp);
            if (el.classList.contains('marks') || el.classList.contains('cvx-rebuilds')) el.classList.add('is-drawn');
            once.unobserve(el);
        });
    }, { threshold: 0, rootMargin: '0px 0px -12% 0px' });

    $$('.reveal, .cvx-stats, .marks, .cvx-rebuilds').forEach(el => {
        if (el.classList.contains('cvx-stats')) $$('.num', el).forEach(n => { n.textContent = '0' + (n.dataset.suffix || ''); });
        once.observe(el);
    });

    // Section nav highlights the section in view
    const navLinks = $$('.cvx-nav a');
    const sections = navLinks.map(a => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
    function setActive(id) {
        navLinks.forEach(a => {
            const on = a.getAttribute('href') === '#' + id;
            a.classList.toggle('is-active', on);
            if (on && window.innerWidth <= 1000) {
                a.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduceMotion ? 'auto' : 'smooth' });
            }
        });
    }
    function onScroll() {
        const line = window.innerHeight * 0.3;
        let current = sections[0];
        sections.forEach(s => { if (s.getBoundingClientRect().top <= line) current = s; });
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = sections[sections.length - 1];
        if (current && current.id !== onScroll.last) { onScroll.last = current.id; setActive(current.id); }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Before / after toggles
    $$('.rb').forEach(card => {
        $$('.rb-toggle button', card).forEach(btn => {
            btn.setAttribute('aria-pressed', String(card.dataset.view === btn.dataset.set));
            btn.addEventListener('click', () => {
                card.dataset.view = btn.dataset.set;
                $$('.rb-toggle button', card).forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
            });
        });
    });

    // Projects: filter by domain and by skill
    const cards = $$('.pj');
    const banner = $('.cvx-skill-banner');
    const empty = $('.cvx-empty');
    const state = { domain: 'all', skill: null };

    function apply() {
        let shown = 0;
        cards.forEach(c => {
            const okDomain = state.domain === 'all' || c.dataset.domain === state.domain;
            const okSkill = !state.skill || (' ' + c.dataset.skills + ' ').includes(' ' + state.skill + ' ');
            const show = okDomain && okSkill;
            c.hidden = !show;
            c.classList.toggle('is-match', !!state.skill && show);
            if (show) shown++;
        });
        empty.hidden = shown > 0;
    }

    $$('.cvx-filters .chip').forEach(chip => chip.addEventListener('click', () => {
        state.domain = chip.dataset.domain;
        $$('.cvx-filters .chip').forEach(c => c.classList.toggle('is-on', c === chip));
        apply();
    }));

    function clearSkill() {
        state.skill = null;
        banner.hidden = true;
        $$('.sk').forEach(s => s.classList.remove('is-on'));
        apply();
    }
    $('.clear', banner).addEventListener('click', clearSkill);

    // Skill chips: show how many projects use each, and filter on click
    $$('.sk').forEach(sk => {
        const key = sk.dataset.skill;
        const n = cards.filter(c => (' ' + c.dataset.skills + ' ').includes(' ' + key + ' ')).length;
        const badge = document.createElement('span');
        badge.className = 'n' + (n ? '' : ' work');
        badge.textContent = n ? String(n) : 'work';
        badge.setAttribute('aria-hidden', 'true');
        sk.appendChild(badge);
        sk.title = n ? `Used in ${n} project${n === 1 ? '' : 's'} - click to see them` : (sk.dataset.note || 'Used in professional work');

        sk.addEventListener('click', () => {
            if (state.skill === key) { clearSkill(); return; }
            const label = sk.firstChild.textContent.trim();
            $$('.sk').forEach(s => s.classList.toggle('is-on', s === sk));
            if (n) {
                state.skill = key;
                state.domain = 'all';
                $$('.cvx-filters .chip').forEach(c => c.classList.toggle('is-on', c.dataset.domain === 'all'));
                $('.msg', banner).innerHTML = `Showing the <b>${n}</b> project${n === 1 ? '' : 's'} that use <b>${label}</b>`;
                banner.hidden = false;
                apply();
                document.getElementById('projects').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
            } else {
                state.skill = null;
                $('.msg', banner).textContent = sk.dataset.note || `${label}: used in professional work, not in a public project.`;
                banner.hidden = false;
                apply();
                document.getElementById('projects').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
            }
        });
    });

    // Show every project when printing, then restore
    window.addEventListener('beforeprint', () => cards.forEach(c => { c.dataset.wasHidden = c.hidden; c.hidden = false; }));
    window.addEventListener('afterprint', () => cards.forEach(c => { c.hidden = c.dataset.wasHidden === 'true'; }));
})();

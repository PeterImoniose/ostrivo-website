// Renders PORTFOLIO_ITEMS (from portfolio-data.js) as cards, with category filtering.
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('portfolio-grid');
    const filterBar = document.getElementById('filter-bar');
    const emptyState = document.getElementById('empty-state');
    if (!grid) return;

    const CATEGORY_LABELS = {
        all: 'All',
        python: 'Python & Software',
        powerbi: 'Power BI',
        other: 'Other'
    };

    function cardHtml(item) {
        const isExternal = /^https?:\/\//.test(item.link);
        const linkAttrs = isExternal ? 'target="_blank" rel="noopener"' : '';
        return `
            <div class="card" data-category="${item.category}">
                <div class="image-slot">
                    <span class="icon">${item.icon || '🗂️'}</span>
                    <span>Screenshot coming soon</span>
                </div>
                <span class="tag">${item.tag}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a class="btn btn-secondary" href="${item.link}" ${linkAttrs}>${item.linkLabel} →</a>
            </div>
        `;
    }

    function render(filter) {
        const items = filter === 'all'
            ? PORTFOLIO_ITEMS
            : PORTFOLIO_ITEMS.filter(item => item.category === filter);

        grid.innerHTML = items.map(cardHtml).join('');
        if (emptyState) emptyState.style.display = items.length ? 'none' : 'block';
    }

    if (filterBar) {
        const categoriesPresent = ['all', ...new Set(PORTFOLIO_ITEMS.map(i => i.category))];
        filterBar.innerHTML = categoriesPresent.map((cat, i) => `
            <button class="filter-btn ${i === 0 ? 'active' : ''}" data-filter="${cat}">
                ${CATEGORY_LABELS[cat] || cat}
            </button>
        `).join('');

        filterBar.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-btn');
            if (!btn) return;
            filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            render(btn.dataset.filter);
        });
    }

    render('all');
});

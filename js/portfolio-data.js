/* Add new work here as you build it - each entry becomes a card on the
   Portfolio page automatically. `category` must be one of: "powerbi", "python", "other" */
const PORTFOLIO_ITEMS = [
    {
        title: "Ostrivo",
        category: "python",
        tag: "Flagship project",
        description: "AI-powered business intelligence web app - upload a CSV/Excel file and get instant dashboards, anomaly detection, and plain-English executive summaries.",
        link: "ostrivo.html",
        linkLabel: "View project",
        icon: "📊"
    },
    {
        title: "Mamidav International",
        category: "other",
        tag: "Client website",
        description: "Company website built and deployed for Mamidav International Ltd, migrated from GitHub Pages to Hostinger with a PHP/MySQL backend.",
        link: "https://www.mamidavintltd.com/",
        linkLabel: "Visit site",
        secondaryLink: "https://github.com/maranathaadesanya/mamidavintltd",
        secondaryLinkLabel: "View on GitHub",
        icon: "🌐"
    },
    {
        title: "Wind Turbine Predictive Maintenance",
        category: "python",
        tag: "MSc Dissertation",
        description: "A three-stage machine learning pipeline (anomaly detection, fault classification, cross-farm transfer validation) for predictive maintenance of wind turbines using SCADA sensor data, evaluated on the CARE benchmark.",
        link: "https://github.com/PeterImoniose/care-wind-turbine-predictive-maintenance",
        linkLabel: "View on GitHub",
        icon: "🌬️"
    },
    {
        title: "Password Protection System",
        category: "python",
        tag: "Python",
        description: "A secure, from-scratch account system - hashed and salted passwords, self-expiring login lockout, and password recovery - rewritten from an insecure notebook prototype into a tested Python package.",
        link: "https://github.com/PeterImoniose/Password_protection_system",
        linkLabel: "View on GitHub",
        icon: "🔒"
    },
    {
        title: "Industrial Pump Maintenance Analysis",
        category: "python",
        tag: "Python",
        description: "Statistical testing and machine learning applied to industrial pump sensor data to test whether maintenance needs can be predicted - and honestly reports the negative result when the data doesn't support it.",
        link: "https://github.com/PeterImoniose/Industrial-Pump-Maintenance-Analysis",
        linkLabel: "View on GitHub",
        icon: "⚙️"
    },
    {
        title: "Fuel System Condition Analysis",
        category: "python",
        tag: "Python",
        description: "Condition monitoring of a fuel injection test rig across five induced fault types, plus a physics-informed regression model for flow prediction deployed as an interactive Gradio demo.",
        link: "https://github.com/PeterImoniose/Analysis-of-the-condition-of-a-fuel-system",
        linkLabel: "View on GitHub",
        icon: "⛽"
    }

    /* Example of a future Power BI dashboard entry - copy this shape:
    {
        title: "Sales Performance Dashboard",
        category: "powerbi",
        tag: "Power BI",
        description: "One-sentence summary of what the dashboard analyses and who it's for.",
        link: "https://link-to-published-dashboard-or-screenshot",
        linkLabel: "View dashboard",
        icon: "📈"
    },
    */

    /* Example of a future GitHub project entry:
    {
        title: "Project Name",
        category: "python",
        tag: "Python",
        description: "One-sentence summary of the project.",
        link: "https://github.com/PeterImoniose/repo-name",
        linkLabel: "View on GitHub",
        icon: "🐍"
    },
    */
];

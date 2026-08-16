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
        icon: "📊",
        noImage: true
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
        icon: "🌐",
        noImage: true
    },
    {
        title: "Wind Turbine Predictive Maintenance",
        category: "python",
        tag: "MSc Dissertation",
        description: "A three-stage machine learning pipeline (anomaly detection, fault classification, cross-farm transfer validation) for predictive maintenance of wind turbines using SCADA sensor data, evaluated on the CARE benchmark.",
        link: "https://github.com/PeterImoniose/care-wind-turbine-predictive-maintenance",
        linkLabel: "View on GitHub",
        icon: "🌬️",
        noImage: true
    },
    {
        title: "Password Protection System",
        category: "python",
        tag: "Python",
        description: "A secure, from-scratch account system - hashed and salted passwords, self-expiring login lockout, and password recovery - rewritten from an insecure notebook prototype into a tested Python package.",
        link: "https://github.com/PeterImoniose/Password_protection_system",
        linkLabel: "View on GitHub",
        icon: "🔒",
        noImage: true
    },
    {
        title: "Industrial Pump Maintenance Analysis",
        category: "python",
        tag: "Python",
        description: "Statistical testing and machine learning applied to industrial pump sensor data to test whether maintenance needs can be predicted - and honestly reports the negative result when the data doesn't support it.",
        link: "https://github.com/PeterImoniose/Industrial-Pump-Maintenance-Analysis",
        linkLabel: "View on GitHub",
        icon: "⚙️",
        noImage: true
    },
    {
        title: "Fuel System Condition Analysis",
        category: "python",
        tag: "Python",
        description: "Condition monitoring of a fuel injection test rig across five induced fault types, plus a physics-informed regression model for flow prediction deployed as an interactive Gradio demo.",
        link: "https://github.com/PeterImoniose/Analysis-of-the-condition-of-a-fuel-system",
        linkLabel: "View on GitHub",
        icon: "⛽",
        noImage: true
    },
    {
        title: "Online Retail Sales Analysis",
        category: "python",
        tag: "Python",
        description: "Revenue, seasonality, and RFM analysis of two years of real UK online retailer transactions - customer segmentation groundwork for a follow-up piece of ML work.",
        link: "https://github.com/PeterImoniose/Online-Retail-Analysis",
        linkLabel: "View on GitHub",
        icon: "🛍️",
        noImage: true
    },
    {
        title: "Rossmann Store Sales Analysis",
        category: "python",
        tag: "Python",
        description: "What actually drives daily sales across 1,115 German drugstores - promo uplift, store type, seasonality, and why competition distance turns out not to matter.",
        link: "https://github.com/PeterImoniose/Rossmann",
        linkLabel: "View on GitHub",
        icon: "🏪",
        noImage: true
    },
    {
        title: "Walmart Sales Drivers Analysis",
        category: "python",
        tag: "Python",
        description: "Department-level analysis of 45 Walmart stores - store size vs. type, holiday uplift, and why regional economic indicators show no real signal.",
        link: "https://github.com/PeterImoniose/Walmart-recruiting",
        linkLabel: "View on GitHub",
        icon: "🏬",
        noImage: true
    },
    {
        title: "Walmart Store Time Series Analysis",
        category: "python",
        tag: "Python",
        description: "Same Walmart stores, a different question - per-store growth, volatility, and forecastability, including a seasonal-naive baseline check for a future forecasting model.",
        link: "https://github.com/PeterImoniose/Walmart-Store",
        linkLabel: "View on GitHub",
        icon: "📈",
        noImage: true
    },
    {
        title: "Olist E-Commerce Analysis",
        category: "python",
        tag: "Python",
        description: "Revenue, category, and geography analysis of a Brazilian e-commerce marketplace - and the standout finding that late delivery drives a 1.73-star review-score drop.",
        link: "https://github.com/PeterImoniose/Olist",
        linkLabel: "View on GitHub",
        icon: "🛒",
        noImage: true
    },
    {
        title: "Company Registration Data Analysis",
        category: "python",
        tag: "Python",
        description: "Sector, turnover, and growth analysis of UK company registration data - answering four set questions with data-driven corrections to initial hypotheses along the way.",
        link: "https://github.com/PeterImoniose/Company-registration",
        linkLabel: "View on GitHub",
        icon: "🏛️",
        noImage: true
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

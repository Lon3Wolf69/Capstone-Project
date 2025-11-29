export const navRoutes = [
    {
        label: "Disasters",
        path: "/disasters",
        children: [
            {label: "Hurricanes", path: "/disasters/hurricanes"},
            {label: "Tornadoes", path: "/disasters/tornadoes"},
            {label: "Flooding", path: "/disasters/flooding"},
            {label: "Wildfires", path: "/disasters/wildfires"},
            {label: "Drought", path: "/disasters/drought"}
        ]
    },
    {
        label: "Resources",
        path: "/resources",
        children: [
            { label: "Expert Consultants", path: "/resources/experts" },
            { label: "Templates & Guides", path: "/resources/templates-guides"},
            { label: "Training & Exercises", path: "/resources/training-exercises"},
            { label: "Data & Tools", path: "/resources/data-tools"},
            { label: "Grants & Funding", path: "/resources/grants-funding"}
        ]
    },
    {
        label: "Response",
        path: "/response",
        children: [
            { label: "Incident Action Planning", path: "/response/iap"},
            { label: "EOC Tools", path: "/response/eoc"},
            { label: "Public Information & Alerts", path: "/response/public-info-alerts"},
            { label: "Sheltering & Mass Care", path: "/response/sheltering-care"},
            { label: "Damage Assessment", path: "/response/damage-assessment"},
            { label: "Crisis Communications", path: "/response/crisis-communications"}
        ]
    },
    {
        label: "Recovery",
        path: "/recovery",
        children: [
            { label: "Individual & Public Assistance", path: "/recovery/individual-public-assistance"},
            { label: "Debris & Infrastructure", path: "/recovery/debris-infrastructure"},
            { label: "Mitigation & Resilience", path: "/recovery/mitigation-resilience"},
            { label: "Community Recovery", path: "/recovery/community-recovery"},
            { label: "After-Action Support", path: "/recovery/after-action-support"}
        ]
    }
]
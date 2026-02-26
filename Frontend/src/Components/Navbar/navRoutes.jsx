// This is an array set to the variable navRoutes. It will be the routing information for all the links used within the navbar. No need for export function down below since we have it up here 
export const navRoutes = [
    // Index 0
    {
        label: "About",                                               // Label for the specific index of the array used as a unique key to identify for mapping function later as well as the dropdown button text
        path: "/about",                                               // This is the path that shows up in the url when the dropdown is clicked
    },
    // Index 1
    {
        label: "Focus Areas",                                               // Label for the specific index of the array used as a unique key to identify for mapping function later as well as the dropdown button text
        path: "/focusAreas",                                               // This is the path that shows up in the url when the dropdown is clicked
        children: [
            { label: "Interagency Recovery", path: "/focusAreas/interagencyRecovery" },             // label: text that shows up as the clickable link path: What shows up in the url
            { label: "Debris Management", path: "/focusAreas/debrisManagment"},                      // label: text that shows up as the clickable link path: What shows up in the url
            { label: "Crisis Communications", path: "/focusAreas/crisisCommunications"},                 // label: text that shows up as the clickable link path: What shows up in the url
        ]
    },
    // Index 2
    {
        label: "Case Studies",                                                 // Label for the specific index of the array used as a unique key to identify for mapping function later as well as the dropdown button text
        path: "/caseStudies",                                                 // This is the path that shows up in the url when the dropdown is clicked
        children: [
            { label: "North Carolina", path: "caseStudies/northCarolina"},                    // label: text that shows up as the clickable link path: What shows up in the url
        ]
    },
    // Index 3
    {
        label: "Platform",                                                 // Label for the specific index of the array used as a unique key to identify for mapping function later as well as the dropdown button text
        path: "/platform",                                                 // This is the path that shows up in the url when the dropdown is clicked
        children: [
            { label: "Coordination Hub Overview", path: "/platform/coordinationHubOverview"},   // label: text that shows up as the clickable link path: What shows up in the url
        ]
    }
]
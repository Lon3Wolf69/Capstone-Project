// This is an array set to the variable navRoutes. It will be the routing information for all the links used within the navbar. No need for export function down below since we have it up here 
export const navRoutes = [
    // Index 0
    {
        label: "About",                                               // Label for the specific index of the array used as a unique key to identify for mapping function later as well as the dropdown button text
        path: "/about",                                               // This is the path that shows up in the url when the dropdown is clicked
        children: [
            { label: "About Us", path: "/About/AboutUs"},                   // Replace the "Intro" name
            { label: "Meet the Team", path: "/About/Team"},
            
            
        ]
    },
    // Index 1
    {
        label: "Focus Area",
        path: "/focusarea",

        children: [
            
        ]
    },

    // Index 2
    {
        label: "Case Studies",                                                 // Label for the specific index of the array used as a unique key to identify for mapping function later as well as the dropdown button text
        path: "/caseStudies",                                                 // This is the path that shows up in the url when the dropdown is clicked
         //children: [
          //  { label: "North Carolina", path: "/caseStudies"},                    // label: text that shows up as the clickable link path: What shows up in the url
       //  ]
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
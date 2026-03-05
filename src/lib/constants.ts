export const APP_NAME = "CodeMastery Hub";
export const APP_DESCRIPTION = "Next-generation developer learning platform";

export const ROUTES = {
    HOME: "/",
    COURSES: "/courses",
    COURSE_DETAILS: "/courses/:id",
    PATHS: "/paths",
    PATH_DETAILS: "/paths/:id",
    PRICING: "/pricing",
    LOGIN: "/login",
    SIGNUP: "/signup",
    ABOUT: "/about",
    BLOG: "/blog",
    CAREERS: "/careers",
    CONTACT: "/contact",
    PRIVACY: "/privacy",
    TERMS: "/terms",
    COOKIES: "/cookies",
    PROJECTS: "/projects",
    CERTIFICATION: "/certification",
    TECH_DETAILS: "/tech/:id"
} as const;

export const CONTACT_INFO = {
    EMAIL: "hello@codemastery.com",
    LOCATION: "Padmarao Nagar, Secunderabad, Telangana",
    SOCIAL: {
        GITHUB: "https://github.com",
        TWITTER: "https://twitter.com",
        LINKEDIN: "https://linkedin.com"
    }
};

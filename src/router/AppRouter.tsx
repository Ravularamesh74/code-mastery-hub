import { Routes, Route } from "react-router-dom";

// Landing pages
import Home from "@/pages/landing/Home";
import About from "@/pages/landing/About";
import Blog from "@/pages/landing/Blog";
import Careers from "@/pages/landing/Careers";
import Contact from "@/pages/landing/Contact";
import Pricing from "@/pages/landing/Pricing";
import Projects from "@/pages/landing/Projects";

// Course pages
import Courses from "@/pages/courses/Courses";
import CourseDetails from "@/pages/courses/CourseDetails";

// Path pages
import Paths from "@/pages/paths/Paths";
import PathDetails from "@/pages/paths/PathDetails";

// Tech pages
import TechDetails from "@/pages/tech/TechDetails";

// Auth pages
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";

// Dashboard pages
import Certificates from "@/pages/dashboard/Certificates";

// Legal pages
import Privacy from "@/pages/legal/Privacy";
import Terms from "@/pages/legal/Terms";
import Cookies from "@/pages/legal/Cookies";

// Other
import NotFound from "@/pages/NotFound";
import { ROUTES } from "@/lib/constants";

export default function AppRouter() {
    return (
        <Routes>
            {/* Landing */}
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.BLOG} element={<Blog />} />
            <Route path={ROUTES.CAREERS} element={<Careers />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path={ROUTES.PRICING} element={<Pricing />} />
            <Route path={ROUTES.PROJECTS} element={<Projects />} />

            {/* Courses */}
            <Route path={ROUTES.COURSES} element={<Courses />} />
            <Route path={ROUTES.COURSE_DETAILS} element={<CourseDetails />} />

            {/* Paths */}
            <Route path={ROUTES.PATHS} element={<Paths />} />
            <Route path={ROUTES.PATH_DETAILS} element={<PathDetails />} />

            {/* Tech */}
            <Route path={ROUTES.TECH_DETAILS} element={<TechDetails />} />

            {/* Auth */}
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGNUP} element={<Signup />} />

            {/* Dashboard */}
            <Route path={ROUTES.CERTIFICATION} element={<Certificates />} />

            {/* Legal */}
            <Route path={ROUTES.PRIVACY} element={<Privacy />} />
            <Route path={ROUTES.TERMS} element={<Terms />} />
            <Route path={ROUTES.COOKIES} element={<Cookies />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

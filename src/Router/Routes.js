import Home from "../pages/Home";
import OurClasses from "../pages/OurClasses";
import Services from "../pages/Services";
import Pricing from "../pages/Pricing";
import AboutUs from "../pages/AboutUs";

export const AppRoutes = [
    {
        path: '/Home',
        exact: true,
        renderPage: <Home />
    },
    {
        path: '/Schedules',
        exact: true,
        renderPage: <OurClasses />
    },
    {
        path: '/Services',
        exact: true,
        renderPage: <Services />
    },
    {
        path: '/Pricing',
        exact: true,
        renderPage: <Pricing />
    },
    {
        path: '/About',
        exact: true,
        renderPage: <AboutUs />
    }
]
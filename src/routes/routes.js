import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

export const loggedRoutes = [
    {path: '/home', element: Home},
    {path: 'projects', element: Projects},
]

export const notLoggedRoutes = [
    {path: '/login', element: Login},
    {path: '/register', element: Register},
]
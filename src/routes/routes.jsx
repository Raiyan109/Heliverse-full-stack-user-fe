import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Layout from "../pages/Layout";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout>
            <Home />
            <Login />
        </Layout>
    },
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signUp',
        element: <SignUp />
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />
    },

])

export default routes
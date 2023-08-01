import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
const Splash = lazy(() => import("./components/Splash"));
const Onboarding = lazy(() => import("./components/Onboarding"));
const SignIn = lazy(() => import("./components/SignIn"));
const SignUp = lazy(() => import("./components/SignUp"));
const Message = lazy(() => import("./components/Message"));
import './i18Next'


const AppLayout = () => {
    return(
        <div className="w-full h-full">
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Suspense fallback={<h1>Loading...</h1>}><Splash /></Suspense>
            },
            {
                path: "/home",
                element: <Suspense fallback={<h1>Loading...</h1>}><Onboarding /></Suspense>
            },
            {
                path: "/login",
                element: <Suspense fallback={<h1>Loading...</h1>}><SignIn /></Suspense>
            },
            {
                path: "/signup",
                element: <Suspense fallback={<h1>Loading...</h1>}><SignUp /></Suspense>
            },
            {
                path: "/chat_bot",
                element: <Suspense fallback={<h1>Loading...</h1>}><Message /></Suspense>
            },
        ]
    }

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
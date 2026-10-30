import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router"
import CakeListRoute from "./routes/CakeListRoute"
import CakeDeteilRoute from "./routes/CakeDetailRoute"
import ProtectedRoute from "./routes/ProtectedRoute"
import CakeCreateRoute from "./routes/CakeCreateRoute"
import SignInRoute from "./routes/SignInRoute"
import SignUpRoute from "./routes/SignUpRoute"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <CakeListRoute />,
                loader: CakeListRoute.loader,
            },
            {
                path: "/cakes/:id",
                element: <CakeDeteilRoute />,
                loader: CakeDeteilRoute.loader,
            },
            {
                path: "/cakes/create",
                element: (
                    <ProtectedRoute>
                        <CakeCreateRoute />
                    </ProtectedRoute>
                ),
                action: CakeCreateRoute.action,
                errorElement: <div>Oops! Ein Fehler is aufgetreten</div>,
            },
            {
                path: "/auth/signin",
                element: <SignInRoute />,
                action: SignInRoute.action,
            },
            {
                path: "/auth/signup",
                element: <SignUpRoute />,
                action: SignUpRoute.action,
            },
        ],
    },
])

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)

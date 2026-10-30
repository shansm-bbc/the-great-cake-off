import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router"
import CakeListRoute from "./routes/CakeListRoute"
import CakeDeteilRoute from "./routes/CakeDetailRoute"

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
        ],
    },
])

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)

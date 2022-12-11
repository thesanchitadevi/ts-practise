import { lazy } from "react";
import { PUBLIC_ROUTES } from "./paths";

export const publicRoutes = [
    {
        path: PUBLIC_ROUTES.HOME,
        Component: lazy(() => import("@pages/Home"))
    },
    {
        path: PUBLIC_ROUTES.CONTACT,
        Component: lazy(() => import("@pages/Contact/Contact"))
    },
]
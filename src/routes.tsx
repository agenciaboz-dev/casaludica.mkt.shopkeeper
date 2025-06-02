import React from "react"
import { Routes as ReactRoutes, Route, useLocation } from "react-router-dom"
import { Home } from "./pages/Home"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    return (
        <ReactRoutes>
            <Route path="/*" element={<Home />} />
        </ReactRoutes>
    )
}

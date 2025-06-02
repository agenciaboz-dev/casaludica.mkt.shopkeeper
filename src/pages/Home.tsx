import React from "react"
import { Box } from "@mui/material"
import { Toothpaste } from "../components/Toothpaste"
import { Login } from "../components/Login"

interface HomeProps {}

export const Home: React.FC<HomeProps> = (props) => {
    return (
        <Box sx={{ height: "100vh", position: "relative" }}>
            <video src="/background.mp4" style={{ width: "100vw", height: "100vh", objectFit: "fill" }} autoPlay muted loop />
            <Box sx={{ bgcolor: "#22276A80", width: "100vw", height: "100vh", position: "absolute" }} />
            <Toothpaste />
            <Login />
        </Box>
    )
}

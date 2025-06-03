import React from "react"
import { Box, useMediaQuery } from "@mui/material"
import { Toothpaste } from "../components/Toothpaste"
import { Login } from "../components/Login"

interface HomeProps {}

export const Home: React.FC<HomeProps> = (props) => {
    const isMobile = useMediaQuery("(orientation: portrait)")
    return (
        <Box sx={{ height: "100vh", position: "relative", overflow: "hidden" }}>
            <video
                src="/background.mp4"
                style={{ width: "100vw", height: "100vh", objectFit: isMobile ? "cover" : "fill" }}
                autoPlay
                muted
                loop
                disablePictureInPicture
            />
            <Box sx={{ bgcolor: "#22276A80", width: "100vw", height: "100vh", position: "absolute" }} />
            <Toothpaste />
            <Login />
        </Box>
    )
}

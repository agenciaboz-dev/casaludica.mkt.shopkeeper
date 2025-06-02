import React from "react"
import { AlertColor, Box, SxProps, useMediaQuery } from "@mui/material"

interface DataTextProps {
    title: string
    value: React.ReactNode
    color?: AlertColor
    bold?: boolean
    titleSx?: SxProps
    valueSx?: SxProps
}

export const DataText: React.FC<DataTextProps> = ({ title, value, color, bold, valueSx, titleSx }) => {
    const isMobile = useMediaQuery("(orientation: portrait)")

    return (
        <Box
            sx={{
                gap: "5vw",
                fontSize: isMobile ? "1.1rem" : "2rem",
                alignItems: "center",
                color: "primary.main",
                fontFamily: "BowlbyOneSC",
                justifyContent: "space-between",
                fontWeight: bold ? "bold" : "",
                width: "100%",
                ...titleSx,
            }}
        >
            {title}
            <Box
                sx={{
                    fontSize: "1rem",
                    color: `${color}.main`,
                    fontWeight: bold ? "bold" : "",
                    ...valueSx,
                }}
            >
                {value}
            </Box>
        </Box>
    )
}

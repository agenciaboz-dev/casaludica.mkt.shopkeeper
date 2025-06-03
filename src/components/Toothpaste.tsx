import React, { useEffect, useState } from "react"
import { Box, useMediaQuery } from "@mui/material"
import { Area, AreaChart, ResponsiveContainer } from "recharts"

interface ToothpasteProps {}

export const Toothpaste: React.FC<ToothpasteProps> = (props) => {
    const isMobile = useMediaQuery("(orientation: portrait)")

    const [values, setValues] = useState([0, 0, 0, 0, 0, 0, 0, 0])

    useEffect(() => {
        setTimeout(() => {
            setValues([9, 10, 10, 8, 5, 5, 7, 8, 7])
        }, 500)
    }, [])

    return (
        <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "100vw" }}>
            <ResponsiveContainer style={{ flex: 1, paddingRight: isMobile ? 20 : undefined }} height={350}>
                <AreaChart
                    data={values.map((item) => ({ x: item }))}
                    margin={{
                        left: -20,
                    }}
                    style={{ flex: 1 }}
                >
                    <Area dataKey={"x"} type={"natural"} strokeOpacity={0} fillOpacity={1} fill={"#fff"} />
                </AreaChart>
            </ResponsiveContainer>
        </Box>
    )
}

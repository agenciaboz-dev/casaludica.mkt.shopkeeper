import React, { useEffect, useState } from "react"
import { Box, useMediaQuery } from "@mui/material"
import { Area, AreaChart, ResponsiveContainer } from "recharts"

interface ToothpasteProps {}

export const Toothpaste: React.FC<ToothpasteProps> = (props) => {
    const isMobile = useMediaQuery("(orientation: portrait)")

    const [values, setValues] = useState([0, 0, 0, 0, 0, 0, 0, 0])

    useEffect(() => {
        setTimeout(() => {
            setValues(isMobile ? [5, 4.5, 3, 2.5] : [10.5, 11, 11, 8.5, 6, 7, 9, 10, 9.5])
        }, 500)
    }, [isMobile])

    return (
        <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "100vw" }}>
            <ResponsiveContainer style={{ flex: 1 }} height={350}>
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

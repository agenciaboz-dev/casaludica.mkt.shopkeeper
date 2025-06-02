import React from "react"
import "./css/styles.css"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@mui/material"
import { useMuiTheme } from "./hooks/useMuiTheme"
import { Snackbar, SnackbarProvider } from "burgos-snackbar"
import { Routes } from "./routes"
import { ConfirmDialog, ConfirmDialogProvider } from "burgos-confirm"

function App() {
    const muiTheme = useMuiTheme()

    return (
        <ThemeProvider theme={muiTheme}>
            <SnackbarProvider>
                <ConfirmDialogProvider>
                    <BrowserRouter>
                        <Snackbar />
                        <ConfirmDialog />
                        <Routes />
                    </BrowserRouter>
                </ConfirmDialogProvider>
            </SnackbarProvider>
        </ThemeProvider>
    )
}

export default App

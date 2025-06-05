import React, { useState } from "react"
import { Avatar, Box, Button, CircularProgress, Paper, Typography, useMediaQuery } from "@mui/material"
import logo from "../images/logo.svg"
import { RoundedTextField } from "./RoundedTextField"
import { useFormik } from "formik"
import { api } from "../api"
import { User } from "../types/server/class/User"

interface LoginProps {}

export const Login: React.FC<LoginProps> = (props) => {
    const isMobile = useMediaQuery("(orientation: portrait)")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const formik = useFormik<{ login: string; password: string }>({
        initialValues: { login: "", password: "" },
        onSubmit: async (values) => {
            if (loading) return
            setLoading(true)
            setError("")

            console.log(values)

            try {
                const response = await api.post("/user/login", values, { params: { shopkeeper: true } })
                console.log(response.data)
                const user = response.data as User | null
                if (user) {
                    window.location.href = `https://lojas.casaludica.com.br?token=${user.token}`
                } else {
                    setError("Usuário ou senha inválidos")
                }
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        },
    })

    return (
        <Box
            sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Paper
                elevation={5}
                sx={{
                    padding: isMobile ? "5vw" : "1.5vw",
                    paddingBottom: isMobile ? "7vw" : "4vw",
                    flexDirection: "column",
                    gap: isMobile ? "7vw" : "2vw",
                    alignItems: "center",
                    borderRadius: isMobile ? "3vw" : "0.75vw",
                    minWidth: isMobile ? undefined : "22.5vw",
                    width: isMobile ? "90vw" : undefined,
                    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.7)",
                }}
            >
                <form onSubmit={formik.handleSubmit} style={{ display: "contents" }}>
                    <Avatar src={logo} variant="square" sx={{ width: isMobile ? "40vw" : "10vw", height: "auto" }} />
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            fontSize: isMobile ? "1.75rem" : "2rem",
                            marginTop: "-1vw",
                            textAlign: "center",
                        }}
                    >
                        Loja do Franqueado
                    </Typography>

                    <RoundedTextField
                        label="E-mail"
                        value={formik.values.login}
                        name="login"
                        onChange={formik.handleChange}
                        required
                        error={!!error}
                    />
                    <RoundedTextField
                        label="Senha"
                        value={formik.values.password}
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        required
                        error={!!error}
                        helperText={error}
                    />

                    <Button
                        variant="contained"
                        type="submit"
                        sx={{
                            alignSelf: "flex-end",
                            borderRadius: "5vw",
                            textTransform: "none",
                            fontWeight: "bold",
                            padding: isMobile ? "2vw" : "0.5vw 1.5vw",
                            width: isMobile ? "100%" : "auto",
                        }}
                    >
                        {loading ? <CircularProgress color="secondary" size="1.5rem" /> : "Entrar"}
                    </Button>
                </form>
            </Paper>
        </Box>
    )
}

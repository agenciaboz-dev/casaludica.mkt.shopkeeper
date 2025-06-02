import React, { useState } from "react"
import { Avatar, Box, Button, CircularProgress, Paper, Typography } from "@mui/material"
import logo from "../images/logo.svg"
import { RoundedTextField } from "./RoundedTextField"
import { useFormik } from "formik"
import { api } from "../api"
import { User } from "../types/server/class/User"

interface LoginProps {}

export const Login: React.FC<LoginProps> = (props) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const formik = useFormik<{ login: string; password: string }>({
        initialValues: { login: "", password: "" },
        onSubmit: async (values) => {
            if (loading) return
            setLoading(true)
            setError('')

            console.log(values)

            try {
                const response = await api.post("/user/login", values, {params: {shopkeeper: true}})
                console.log(response.data)
                const user = response.data as User | null
                if (user) {
                    window.location.href = (`https://lojas.casaludica.com.br?token=${user.token}`)
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
            <Paper elevation={5} sx={{ padding: "2vw", flexDirection: "column", gap: "1vw", alignItems: "center", borderRadius: "1vw" }}>
                <form onSubmit={formik.handleSubmit} style={{ display: "contents",}}>
                    <Avatar src={logo} variant="square" sx={{ width: "10vw", height: "auto" }} />
                <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>Loja do Franqueado</Typography>

                <RoundedTextField label="E-mail" value={formik.values.login} name="login" onChange={formik.handleChange} required error={!!error} />
                <RoundedTextField label="Senha" value={formik.values.password} type="password" name="password" onChange={formik.handleChange} required error={!!error} helperText={error} />

                <Box sx={{ alignSelf: "flex-end" }}>
                    <Button variant="contained" type='submit' sx={{ borderRadius: "5vw", textTransform: "none" }}>
                        {loading ? <CircularProgress color='secondary' size='1.5rem' /> : "Entrar"}
                    </Button>
                </Box>
                </form>
            </Paper>
        </Box>
    )
}

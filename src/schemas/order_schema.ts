import * as Yup from "yup"
import { validationErrors } from "../tools/validationErrors"
import { validateCPF } from "../tools/validateCPF"

const required_message = validationErrors.required

export const order_schema = Yup.object().shape({
    name: Yup.string().min(3, "Insira um nome válido").required(required_message),
    lastname: Yup.string().min(3, "Insira um sobrenome válido").required(required_message),
    cpf: Yup.string()
        .required(required_message)
        .test("cpf-valid", "CPF inválido", (value) => {
            const isValid = validateCPF(value || "")
            return isValid
        }),
    postcode: Yup.string()
        .required(required_message)
        .matches(/^\d{2}.?\d{3}-?\d{3}$/, "CEP inválido."),

    address: Yup.string().required(required_message).min(3, "Insira um endereço válido"),
    number: Yup.string().required(required_message).min(1, "Insira um número válido"),
    district: Yup.string().required(required_message).min(3, "Insira um bairro válido"),
    city: Yup.string().required(required_message).min(3, "Insira uma cidade válida"),
    state: Yup.string().required(required_message).length(2, "Insira um estado válido"),
    phone: Yup.string()
        .required(required_message)
        .matches(/^\(\d{2}\) \d \d{4}-\d{4}$/, "Telefone inválido"),

    email: Yup.string().email("E-mail inválido").required(required_message),
})

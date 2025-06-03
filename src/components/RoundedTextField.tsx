import React from "react"
import { TextField, TextFieldProps } from "@mui/material"
import { grey } from "@mui/material/colors"

interface RoundedTextFieldProps extends TextFieldProps<"standard"> {}

export const RoundedTextField: React.FC<RoundedTextFieldProps> = (props) => {
    return (
        <TextField
            {...props}
            sx={{
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: grey[600],
                    },
                    "&:hover fieldset": {
                        borderColor: grey[800],
                    },
                },
                "& .MuiInputLabel-shrink": {
                    fontSize: "1.2rem",
                },
                ...props.sx,
            }}
            slotProps={{
                input: {
                    sx: { borderRadius: "1.5rem" },
                    ...(props.slotProps?.input || {}),
                },
            }}
        />
    )
}

import { TextField } from "@mui/material"

const TextFieldComponent = ({ label, variant, fullWidth, multiline, rows }) => {
    return (
        <>
            <TextField
                label={label}
                variant={variant}
                fullWidth={fullWidth}
                multiline={multiline}
                rows={rows}
            />
        </>
    )
}

export default TextFieldComponent

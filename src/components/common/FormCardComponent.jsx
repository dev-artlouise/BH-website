import { Paper } from "@mui/material"

const FormCardComponent = ({ cardContent }) => {
    return (
        <Paper
            sx={{
                padding: '48px',
                borderRadius: '8px',
                paddingBottom: '24px'
            }}
        >
            {cardContent}
        </Paper>
    )
}

export default FormCardComponent

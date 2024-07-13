import { Button } from '@mui/material'
import { } from 'lucide-react'

const ButtonComponent = ({ label, variant, size, color, onClick, fullWidth }) => {
    return (
        <>
            <Button
                color={color}
                onClick={onClick}
                variant={variant}
                size={size}
                fullWidth={fullWidth}
                sx={{
                    textTransform: 'capitalize'
                }}
            >
                {label}
            </Button>
        </>
    )
}

export default ButtonComponent
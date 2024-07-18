import { Button } from '@mui/material'
import { } from 'lucide-react'

const ButtonComponent = ({ label, variant, size, color, onClick, fullWidth, height }) => {
    return (
        <>
            <Button
                color={color}
                onClick={onClick}
                variant={variant}
                size={size}
                fullWidth={fullWidth}
                sx={{
                    height: height,
                    textTransform: 'capitalize'
                }}
            >
                {label}
            </Button>
        </>
    )
}

export default ButtonComponent
import { Button } from '@mui/material'
import { } from 'lucide-react'

const ButtonComponent = ({ label, variant, size, color, onClick }) => {
    return (
        <>
            <Button
                color={color}
                onClick={onClick}
                variant={variant}
                size={size}
                sx={{
                    textTransform: 'capitalize'
                }}
            >
                {label}
            </Button>
            {/* <button className='flex items-center py-2 px-3 border rounded-full'>
                {label}
            </button> */}
        </>
    )
}

export default ButtonComponent
import { IconButton } from "@mui/material"

const IconButtonComponent = ({ icon, onClick }) => {
    return (
        <>
            <IconButton
                onClick={onClick}
            >
                {icon}
            </IconButton>
        </>
    )
}

export default IconButtonComponent
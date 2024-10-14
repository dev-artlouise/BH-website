import React from 'react'
import { Button, Box, Stack } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const ActionButtonComponent = ({ path, label, size, styles }) => {

    return (
        <Button
            LinkComponent={RouterLink}
            to={path}
            size={size}
            sx={styles}
        >
            <Stack direction={'row'} alignItems={'center'}>
                {label}
                <Box ml={1}>
                    <ChevronRight />
                </Box>
            </Stack>
        </Button>
    )
}

export default ActionButtonComponent
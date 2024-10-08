import { useState } from 'react'

import { Box, SwipeableDrawer, IconButton, List, ListItem, ListItemText } from '@mui/material';

import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import IconButtonComponent from './IconButtonComponent';

const SideDrawer = ({ anchor, items, width }) => {

    const [openDrawer, setOpenDrawer] = useState(false)

    const handleOnMenuClick = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpenDrawer(open);
    };

    const drawerContent = (
        <div
            role="presentation"
            onClick={handleOnMenuClick(false)}
            onKeyDown={handleOnMenuClick(false)}
        >

            <Box
                sx={{
                    padding: '10px',
                    display: 'flex',

                }}
            >
                <IconButtonComponent
                    onClick={handleOnMenuClick(false)}
                    icon={<X />}
                />
            </Box>


            <List>
                {items.map(({ label, path }, index) => (
                    <ListItem button component={Link} to={path} key={index}>
                        <ListItemText primary={label} />
                    </ListItem>
                ))}
            </List>

        </div>
    );

    return (
        <div>
            <IconButton
                aria-label="menu-mobile"
                size="small"
                onClick={handleOnMenuClick(true)}
            >
                <Menu
                    color='white'
                    fontSize="inherit"
                />
            </IconButton>

            <SwipeableDrawer
                anchor={anchor}
                open={openDrawer}
                onClose={handleOnMenuClick(false)}
                onOpen={handleOnMenuClick(true)}
                PaperProps={{
                    sx: { width: width },
                }}
            >
                {drawerContent}
            </SwipeableDrawer>
        </div>
    )
}

export default SideDrawer
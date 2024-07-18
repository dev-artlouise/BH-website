import { useState } from 'react'

import { Container, Box, Grid, Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Checkbox, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material'

import CardComponent from '../components/common/CardComponent'
import SelectComponent from '../components/common/SelectComponent'
import ButtonComponent from '../components/common/ButtonComponent'

const prodCategories = [
    {
        id: 1,
        name: 'Processors',
        products: [
            { id: 1, name: 'AMD Ryzen', description: 'AMD Processor' },
            { id: 2, name: 'Intel', description: 'Intel Processor' }
        ]
    },

    {
        id: 2,
        name: 'MotherBoard',
        products: [
            { id: 1, name: 'AMD Ryzen', description: 'AMD Processor' },
            { id: 2, name: 'Intel', description: 'Intel Processor' }
        ]
    },

    {
        id: 3,
        name: 'Memory',
        products: [
            { id: 1, name: 'AMD Ryzen', description: 'AMD Processor' },
            { id: 2, name: 'Intel', description: 'Intel Processor' }
        ]
    },

    {
        id: 4,
        name: 'VideoCard',
        products: [
            { id: 1, name: 'AMD Ryzen', description: 'AMD Processor' },
            { id: 2, name: 'Intel', description: 'Intel Processor' }
        ]
    },

    {
        id: 5,
        name: 'SSD',
        products: [
            { id: 1, name: 'AMD Ryzen', description: 'AMD Processor' },
            { id: 2, name: 'Intel', description: 'Intel Processor' }
        ]
    },

    {
        id: 6,
        name: 'HDD',
        products: [
            { id: 1, name: 'AMD Ryzen', description: 'AMD Processor' },
            { id: 2, name: 'Intel', description: 'Intel Processor' }
        ]
    },

    {
        id: 7,
        name: 'Power Supply',
        products: [
            { id: 1, name: 'AMD Ryzen', description: 'AMD Processor' },
            { id: 2, name: 'Intel', description: 'Intel Processor' }
        ]
    },

    {
        id: 8,
        name: 'Casing',
        products: [
            { id: 1, name: 'AMD Ryzen', description: 'AMD Processor' },
            { id: 2, name: 'Intel', description: 'Intel Processor' }
        ]
    },

    {
        id: 9,
        name: 'CPU Cooler',
        products: [
            { id: 1, name: 'AMD Ryzen', description: 'AMD Processor' },
            { id: 2, name: 'Intel', description: 'Intel Processor' }
        ]
    },

    {
        id: 10,
        name: 'Monitor',
        products: [
            {
                id: 1,
                name: 'AMD Ryzen',
                description: 'AMD Processor'
            },
            {
                id: 2, name: 'Intel',
                description: 'Intel Processor'
            }
        ]
    },

    {
        id: 11,
        name: 'Periperals',
        products: [
            { id: 1, name: 'AMD Ryzen', description: 'AMD Processor' },
            { id: 2, name: 'Intel', description: 'Intel Processor' }
        ]
    },

    {
        id: 12,
        name: 'Accessories',
        products: [
            { id: 1, name: 'AMD Ryzen', description: 'AMD Processor' },
            { id: 2, name: 'Intel', description: 'Intel Processor' }
        ]
    },

    {
        id: 13,
        name: 'Printer',
        products: [
            { id: 1, name: 'AMD Ryzen', description: 'AMD Processor' },
        ]
    },

    {
        id: 14,
        name: 'Network Equipment',
        products: [
            { id: 1, name: 'AMD Ryzen', description: 'AMD Processor' },
        ]
    },

    {
        id: 15,
        name: 'Laptops',
        products: [
            { id: 1, name: 'AMD Ryzen', description: 'AMD Processor' },
        ]
    },

]

const products = [
    { id: 1, name: 'TForce Delta', img: '', category: 'Memory' },
    { id: 2, name: 'Corsair PSU', img: '', category: 'Power Supply' },
    { id: 3, name: 'DDR4', img: '', category: 'Memory' }
]

const Products = () => {

    const [checked, setChecked] = useState([]);

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        // console.log('this is the value from component:', event.target.value)
        setSelectedValue(event.target.value);
    };

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <>
            <Box
                sx={{
                    position: 'relative'
                }}
            >
                <Container>
                    <Box
                        sx={{
                            maxWidth: '1236px',
                            paddingTop: '64px',
                            paddingBottom: '64px',
                            width: '100%',
                            margin: '0px auto',
                            paddingLeft: '16px',
                            paddingRight: '16px',
                            position: 'relative',
                        }}
                    >
                        <Grid
                            container
                            spacing={4}
                        >
                            <Grid
                                item
                                md={4}
                                lg={3}
                                sx={{
                                    display: { xs: 'none', sm: 'none', md: 'block' },
                                }}
                            >
                                <Paper>
                                    <Typography
                                        variant='h6'
                                        component='h6'
                                        fontWeight='600'
                                        padding='1rem'
                                        textTransform='uppercase'
                                    >
                                        Categories
                                    </Typography>

                                    <List
                                        dense
                                    >
                                        {prodCategories.map(({ id, name, products }) => (
                                            <ListItem
                                                key={id}

                                                onClick={handleToggle(id)}
                                            >
                                                <ListItemIcon>
                                                    <Checkbox
                                                        edge="start"
                                                        checked={checked.indexOf(id) !== -1}
                                                        tabIndex={-1}
                                                        disableRipple
                                                        inputProps={{ 'aria-labelledby': name }}
                                                    />
                                                </ListItemIcon>

                                                <ListItemText id={id} primary={name} />
                                                ({products.length})
                                            </ListItem>
                                        ))}
                                    </List>

                                </Paper>
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                md={8}
                                lg={9}
                            >
                                <Box
                                    sx={{
                                        marginBottom: '1rem',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >

                                    <SelectComponent
                                        size='small'
                                        labelId='sorting-label'
                                        id="sorting-select"
                                        onChange={handleChange}
                                        label='Sort By'
                                        value={selectedValue}
                                        menuItems={[
                                            { value: 'name', label: 'Name' },
                                            { value: 'price', label: 'Price' },
                                        ]}
                                    />


                                    {/* Display Options */}

                                </Box>

                                <Grid
                                    container
                                    spacing={4}
                                >
                                    {products.map(({ id, name, img }) => (
                                        <Grid
                                            key={id}
                                            item
                                            xs={12}
                                            sm={6}
                                            // md={6}
                                            lg={4}
                                        >

                                            <CardComponent
                                                image="/static/images/cards/contemplative-reptile.jpg"
                                                title={name}
                                                cardContent={
                                                    <Typography
                                                        variant="h6"
                                                        component="div"
                                                        textTransform='uppercase'
                                                        fontWeight='600'
                                                    >
                                                        {name}
                                                    </Typography>
                                                }
                                                cardActions={
                                                    <ButtonComponent
                                                        variant='contained'
                                                        fullWidth={true}
                                                        label='  Add to Cart'
                                                    />
                                                }
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>

                        </Grid>
                    </Box>
                </Container >
            </Box >
        </>
    )
}

export default Products
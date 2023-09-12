import { Box, Button, Grid, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import React from 'react';

const Card = ({ item, step }) => {
    const theme = useTheme();

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            gap={theme.spacing(2)}
            padding={theme.spacing(3.5, 3)}
            sx={{
                borderRadius: theme.spacing(0.625),
                boxShadow: '0px 18px 40px 0px rgba(199, 199, 199, 0.25)'
            }}
        >
            <Box
                display={'flex'}
                justifyContent={'center'}
            >
                <Typography variant='h4' sx={{ color: '#A3A3A3' }}>{item.title}</Typography>
            </Box>
            <Box
                display={'flex'}
                flexDirection={'column'}
                gap={theme.spacing(3)}
            >
                <Box
                    display={'flex'}
                    alignItems={'baseline'}
                >
                    <Typography variant='h1' component={'div'} color={step === 1 ? theme.palette.secondary.main : theme.palette.common.black}>{item.price}</Typography>
                    <Typography variant='subtitle1' component={'span'}>{item.priceDetail}</Typography>
                </Box>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    gap={theme.spacing(1)}
                >
                    {item.features.map((features, index) => (
                        <Box
                            component={ListItem}
                            disableGutters
                            width={'auto'}
                            padding={0}
                        >
                            <CheckCircleIcon sx={{ color: theme.palette.success.main }} />
                            <ListItemText primary={features} />
                        </Box>
                    ))}
                    {item.excluded.map((features, index) => (
                        <Box
                            component={ListItem}
                            disableGutters
                            width={'auto'}
                            padding={0}
                        >
                            <RemoveCircleOutlineIcon sx={{ color: theme.palette.danger.main }} />
                            <ListItemText primary={features} />
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box
                display={'flex'}
                justifyContent={'center'}
            >
                <Button
                    variant="contained"
                    color="primary"
                    component="a"
                    href='/sign up'
                    size='small'
                >
                    Sign up for free
                </Button>
            </Box>
        </Box>
    )
}

export default Card;
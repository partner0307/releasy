import { Box, Button, Typography, useTheme } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import React from 'react';

const Card = ({ list, price, step }) => {
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
                <Typography variant='h4' sx={{ color: '#A3A3A3' }}>{step === 0 ? 'Essential' : step === 1 ? 'Extra' : 'Premium'}</Typography>
            </Box>
            <Box
                display={'flex'}
                flexDirection={'column'}
                gap={theme.spacing(3)}
            >
                <Typography variant='h1' component={'div'} color={step === 1 ? theme.palette.secondary.main : theme.palette.common.black}>{price}<Typography variant='subtitle1' component={'span'}>/month</Typography></Typography>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    gap={theme.spacing(1)}
                >
                    {list.map((item, index) => (
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            gap={theme.spacing(0.5)}
                        >
                            {((step === 0 && index>4) || (step === 1 && index>7)) ? <RemoveCircleOutlineIcon sx={{ color: theme.palette.danger.main }} /> : <CheckCircleIcon sx={{ color: theme.palette.success.main }} />}
                            <Typography variant='body1'>{item}</Typography>
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
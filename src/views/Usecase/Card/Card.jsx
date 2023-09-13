import { Box, Button, Typography, useTheme } from '@mui/material';
import React from 'react';

const Card = ({ item }) => {
    const theme = useTheme();

    return (
        <Box
            display={'flex'}
            flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
            justifyContent={'space-between'}
            gap={theme.spacing(3)}
            sx={{
                background: theme.palette.common.white,
                borderRadius: theme.spacing(0.625),
                boxShadow: '0px 18px 40px 0px rgba(196, 196, 196, 0.25)'
            }}
        >
            <Box
                flex={1}
                height={{ xs: theme.spacing(16), sm: theme.spacing(24.75), md: theme.spacing(28) }}
                sx={{
                    borderRadius: { xs: theme.spacing(0.625, 0.625, 0, 0), sm: theme.spacing(0.625, 0.625, 0, 0), md: theme.spacing(0.625, 0, 0, 0.625) },
                    '& > span': {
                        width: '100% !important',
                        height: '100% !important',
                        borderRadius: { xs: theme.spacing(0.625, 0.625, 0, 0), sm: theme.spacing(0.625, 0.625, 0, 0), md: theme.spacing(0.625, 0, 0, 0.625) },
                    }
                }}
            >
                {item.image}
            </Box>
            <Box
                width={{ xs: '100%', sm: '100%', md: '40%' }}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
                alignItems={'flex-end'}
                padding={theme.spacing(1.5)}
            >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    gap={theme.spacing(2.75)}
                >
                    <Typography variant='h3'>{item.title}</Typography>
                    <Typography variant='body'>{item.description}</Typography>
                </Box>
                <Button
                    variant="contained"
                    color="primary"
                    component="a"
                    href={item.url}
                    size='small'
                >More Details</Button>
            </Box>
        </Box>
    )
}

export default Card;
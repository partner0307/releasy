import { Box, Typography, useTheme } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from 'react';

const Feature = ({ title, description }) => {
    const theme = useTheme();
    return (
        <Box
            display={'flex'}
            gap={theme.spacing(0.5)}
        >
            <CheckCircleIcon sx={{ color: theme.palette.success.main, mt: theme.spacing(0.25) }} />
            <Box
                display={'flex'}
                flexDirection={'column'}
                gap={theme.spacing(0.5)}
            >
                <Typography variant='subtile1' sx={{ fontWeight: 700 }}>{title}</Typography>
                <Typography variant='caption'>{description}</Typography>
            </Box>
        </Box>
    )
}

export default Feature;
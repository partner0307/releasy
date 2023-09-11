import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Typography, useTheme } from '@mui/material';

const Copyright = () => {
    const theme = useTheme()

    return (
        <Box
            display={'flex'}
            flexDirection={{ xs: 'column', sm: 'row' }}
            justifyContent={'space-between'}
            alignItems={'center'}
            gap={{ xs: theme.spacing(1), sm: theme.spacing(2) }}
            padding={theme.spacing(2.3, 0)}
        >
            <Typography variant='body1'>© Releasy Corp. All rights reserved</Typography>
            <Box
                display={'flex'}
                gap={theme.spacing(1)}
            >
                <TwitterIcon sx={{ color: '#777' }} />
                <InstagramIcon sx={{ color: '#777' }} />
                <LinkedInIcon sx={{ color: '#777' }} />
            </Box>
        </Box>
    )
}

export default Copyright;
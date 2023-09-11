import { Avatar, Box, Rating, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import AvatarImage from 'images/avatar.png';

const Review = () => {
    const theme = useTheme();

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            gap={theme.spacing(1)}
            padding={theme.spacing(0.9, 1.25)}
        >
            <Box
                display={'flex'}
                justifyContent={'center'}
            >
                <Rating value={5} readOnly />
            </Box>
            <Typography variant='body1'>Reliable and efficient! The testing services provided by Releasy went beyond what we expected.</Typography>
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'flex-end'}
            >
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    gap={theme.spacing(1)}
                >
                    <Box
                        component={'div'}
                        width={theme.spacing(2.5)}
                        height={theme.spacing(2.5)}
                    >
                        <Avatar>
                            <Image src={AvatarImage} style={{ borderRadius: '50%' }} />
                        </Avatar>
                    </Box>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        gap={theme.spacing(0.25)}
                    >
                        <Typography variant={'subtitle2'}>Lolla Smith</Typography>
                        <Typography variant={'caption'}>Self-Employed</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography variant='caption'>Jul 12, 2023</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Review;
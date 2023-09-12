import React from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';

import SimplicityDesign from 'images/landing/discover/simplicity-design.png';
import Image from 'next/image';

const Advertise = () => {
    const theme = useTheme();
    const signupUrl = process.env.NEXT_PUBLIC_RELEASY_SIGNUP_URL;

    return (
        <Box    
            padding={theme.spacing(6.5, 0, 15.5)}
        >
            <Box
                display={'flex'}
                flexDirection={{ md: 'row', sm: 'column', xs: 'column' }}
                justifyContent={'space-between'}
                alignItems={'center'}
                gap={{ md: theme.spacing(8), sm: theme.spacing(4), xs: theme.spacing(3) }}
            >
                <Box
                    display={'flex'}
                    flexDirection={"column"}
                    alignItems={{ xs: 'center', sm: 'center', md: 'flex-start' }}
                    gap={theme.spacing(4)}
                    flex={1}
                >
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        gap={theme.spacing(1.5)}
                    >
                        <Typography variant='h2'>Experience the ease of Releasy today - Get Started for free!</Typography>
                        <Typography variant='body1'>Join the fast growing community of freelancers and business owners who enjoy Releasy!</Typography>
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            color="secondary"
                            component="a"
                            target="_blank"
                            href={signupUrl}
                            size="large"
                            style={{
                                boxShadow: '0px 10px 30px 0px rgba(68, 68, 68, 0.25)',
                                padding: theme.spacing(1, 5.5)
                            }}
                            >
                            Sign Up For Free
                        </Button>
                    </Box>
                </Box>
                <Box
                    position={'relative'}
                    width={{ lg: '40%', md: '45%', sm: '80%' }}
                    height={{ lg: '80%', md: '90%', sm: '100%' }}
                >
                    <Box
                        position={'relative'}
                        padding={theme.spacing(1, 1.375)}
                        sx={{
                            background: theme.palette.common.white,
                            borderRadius: theme.spacing(0.5)
                        }}
                    >
                        <Image src={SimplicityDesign} alt='advertise' title='advertise' />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Advertise;
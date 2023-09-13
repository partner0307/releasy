import { Box, Typography, useTheme } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Container from 'components/layout/Container';
import { Main } from 'layouts';
import Image from 'next/image';
import React from 'react';

import FreelancersImage from 'images/use-case/developers.jpg';
import Head from 'next/head';

const Freelancers = () => {
    const theme = useTheme();
    const title = `Releasy Use Cases - Freelancers`;
    const description =
        'Releasy shows clients that the freelancer takes their work seriously and is committed to delivering high-quality work';

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} key="description" />
                <meta property="og:title" content={title} key="ogtitle" />
                <meta
                    property="og:description"
                    content={description}
                    key="ogdescription"
                />
                <meta
                    property="og:url"
                    content={`https://www.releasyapp.io/use-cases/freelancers`}
                    key="ogurl"
                />
                <link
                    rel="canonical"
                    href={`https://www.releasyapp.io/use-cases/freelancers`}
                />
            </Head>
            <Main>
                <Container>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        gap={theme.spacing(4)}
                        padding={theme.spacing(0, 0, 14)}
                    >
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={theme.spacing(0.75)}
                        >
                            <Typography variant='h1' component={'h1'} align='center'>
                                <Typography variant='h1' component={'span'} color={'secondary'}>Releasy</Typography> for freelancers
                            </Typography>
                            <Typography variant='body1' align='center'>Releasy shows clients that the freelancer takes their work seriously and is committed to delivering high-quality work. This can lead to a more professional image and better reputation in the industry.</Typography>
                        </Box>
                        <Box
                            display={'flex'}
                            flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
                            gap={theme.spacing(4)}
                        >
                            <Box
                                flex={1}
                                sx={{
                                    '& > span': {
                                        width: '100% !important',
                                        height: '100% !important'
                                    }
                                }}
                            >
                                <Image src={FreelancersImage} alt='freelancers' title='freelancers' />
                            </Box>
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                gap={theme.spacing(2)}
                                width={{ xs: '100%', sm: '100%', md: '40%' }}
                            >
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
                                        <Typography variant='subtile1' sx={{ fontWeight: 700 }}>Faster Feedback</Typography>
                                        <Typography variant='caption'>Freelancers can quickly get feedback from clients on their work, allowing them to make changes and revisions faster and more efficiently.</Typography>
                                    </Box>
                                </Box>
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
                                        <Typography variant='subtile1' sx={{ fontWeight: 700 }}>Increased Collaboration</Typography>
                                        <Typography variant='caption'>Releasy allows for better collaboration between freelancers and clients. Clients can log in and provide feedback in real-time, allowing for better communication and understanding of project requirements.</Typography>
                                    </Box>
                                </Box>
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
                                        <Typography variant='subtile1' sx={{ fontWeight: 700 }}>Improved Quality Assurance</Typography>
                                        <Typography variant='caption'>Freelancers can catch issues and bugs earlier in the development process, leading to higher-quality work and better client satisfaction.</Typography>
                                    </Box>
                                </Box>
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
                                        <Typography variant='subtile1' sx={{ fontWeight: 700 }}>Higher Client Satisfaction</Typography>
                                        <Typography variant='caption'>By using Releasy, freelancers can deliver work that meets or exceeds client expectations, leading to higher client satisfaction and more repeat business.</Typography>
                                    </Box>
                                </Box>
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
                                        <Typography variant='subtile1' sx={{ fontWeight: 700 }}>Time Savings</Typography>
                                        <Typography variant='caption'>With Releasy, freelancers can spend less time managing feedback and bug reports and more time focused on development work, leading to increased productivity and faster project delivery.</Typography>
                                    </Box>
                                </Box>
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
                                        <Typography variant='subtile1' sx={{ fontWeight: 700 }}>Faster Issue Resolution</Typography>
                                        <Typography variant='caption'>Releasy allows freelancers to quickly identify and resolve issues with their product. This can help them avoid costly delays and improve client satisfaction.</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Main>
        </>
    )
}

export default Freelancers;
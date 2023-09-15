import { Box, Grid, Typography, useTheme } from '@mui/material';
import Container from 'components/layout/Container';
import { Main } from 'layouts';
import Image from 'next/image';
import React from 'react';

import FreelancersImage from 'images/use-case/developers.jpg';
import Head from 'next/head';
import Feature from './component/feature';

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
                            flexDirection={{ xs: 'column' }}
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
                            <Grid container spacing={theme.spacing(2)}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Feature
                                        title={'Faster Feedback'}
                                        description={'Freelancers can quickly get feedback from clients on their work, allowing them to make changes and revisions faster and more efficiently.'}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Feature
                                        title={'Increased Collaboration'}
                                        description={'Releasy allows for better collaboration between freelancers and clients. Clients can log in and provide feedback in real-time, allowing for better communication and understanding of project requirements.'}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Feature
                                        title={'Improved Quality Assurance'}
                                        description={'Freelancers can catch issues and bugs earlier in the development process, leading to higher-quality work and better client satisfaction.'}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Feature
                                        title={'Higher Client Satisfaction'}
                                        description={'By using Releasy, freelancers can deliver work that meets or exceeds client expectations, leading to higher client satisfaction and more repeat business.'}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Feature
                                        title={'Time Savings'}
                                        description={'With Releasy, freelancers can spend less time managing feedback and bug reports and more time focused on development work, leading to increased productivity and faster project delivery.'}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Feature
                                        title={'Faster Issue Resolution'}
                                        description={'Releasy allows freelancers to quickly identify and resolve issues with their product. This can help them avoid costly delays and improve client satisfaction.'}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Main>
        </>
    )
}

export default Freelancers;
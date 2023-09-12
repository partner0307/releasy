import { Box, Button, Typography, useTheme } from '@mui/material';
import Container from 'components/layout/Container';
import { Main } from 'layouts';
import Image from 'next/image';
import React from 'react';

import Freelancers from 'images/use-case/developers.jpg';
import Owners from 'images/use-case/project-owners.jpg';
import Managers from 'images/use-case/project-managers.jpg';
import Head from 'next/head';

const UseCase = () => {
    const theme = useTheme();
    const title = `Releasy - Use Cases`;
    const description = `Releasy is the perfect tool for freelancers, startups, teams, and businesses`;

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
                    content={`https://www.releasyapp.io/use-cases`}
                    key="ogurl"
                />
                <link rel="canonical" href={`https://www.releasyapp.io/use-cases`} />
            </Head>
            <Main>
                <Container>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        gap={theme.spacing(4.75)}
                        padding={theme.spacing(0, 0, 12)}
                    >
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={theme.spacing(0.75)}
                        >
                            <Typography variant='h1' align='center'>
                                Who Can Use <Typography variant='h1' component={'span'} color={'secondary'}>Releasy</Typography>
                            </Typography>
                            <Typography variant='body1' align='center'>It's suited for freelancers, project managers, product owners, startups, teams, and businesses.</Typography>
                        </Box>
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={theme.spacing(1.75)}
                            mx={'auto'}
                        >
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
                                            borderRadius: { xs: theme.spacing(0.625, 0.625, 0, 0), sm: theme.spacing(0.625, 0.625, 0, 0), md: theme.spacing(0.625, 0, 0, 0.625) },
                                        }
                                    }}
                                >
                                    <Image src={Freelancers} alt='freelancer' />
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
                                        <Typography variant='h3'>Freelancers</Typography>
                                        <Typography variant='body'>Releasy shows clients that the freelancer takes their work seriously and is committed to delivering high-quality work. This can lead to a more professional image and better reputation in the industry.</Typography>
                                    </Box>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component="a"
                                        href='/use-cases/freelancers'
                                        size='small'
                                    >More Details</Button>
                                </Box>
                            </Box>
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
                                            borderRadius: { xs: theme.spacing(0.625, 0.625, 0, 0), sm: theme.spacing(0.625, 0.625, 0, 0), md: theme.spacing(0.625, 0, 0, 0.625) },
                                        }
                                    }}
                                >
                                    <Image src={Owners} alt='owner' />
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
                                        <Typography variant='h3'>Product Owners</Typography>
                                        <Typography variant='body'>Releasy helps Product Owners to identify and resolve issues earlier in the development process, enabling them to bring products to market faster.</Typography>
                                    </Box>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component="a"
                                        href='/use-cases/product-owners'
                                        size='small'
                                    >More Details</Button>
                                </Box>
                            </Box>
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
                                            borderRadius: { xs: theme.spacing(0.625, 0.625, 0, 0), sm: theme.spacing(0.625, 0.625, 0, 0), md: theme.spacing(0.625, 0, 0, 0.625) },
                                        }
                                    }}
                                >
                                    <Image src={Managers} alt='manager' />
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
                                        <Typography variant='h3'>Project managers</Typography>
                                        <Typography variant='body'>Releasy provides Project Managers with a clear view of project status and progress, enabling them to make informed decisions and adjust plans as necessary.</Typography>
                                    </Box>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component="a"
                                        href='/use-cases/project-managers'
                                        size='small'
                                    >More Details</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Main>
        </>
    )
}

export default UseCase;
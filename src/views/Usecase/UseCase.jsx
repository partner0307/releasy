import { Box, Button, Typography, useTheme } from '@mui/material';
import Container from 'components/layout/Container';
import { Main } from 'layouts';
import Image from 'next/image';
import React from 'react';

import Freelancers from 'images/use-case/developers.jpg';
import Owners from 'images/use-case/project-owners.jpg';
import Managers from 'images/use-case/project-managers.jpg';

const UseCase = () => {
    const theme = useTheme();

    return (
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
                        <Typography variant='h1' component={'div'} align='center'>
                            Who Can Use <Typography variant='h1' component={'span'} color={'secondary'}>Releasy</Typography>
                        </Typography>
                        <Typography variant='body1' align='center'>It's suited for freelancers, project managers, product owners, startups, teams, and businesses.</Typography>
                    </Box>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        gap={theme.spacing(1.75)}
                        maxWidth={1200}
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
                                <Image src={Freelancers} />
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
                                <Image src={Owners} />
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
                                <Image src={Managers} />
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
    )
}

export default UseCase;
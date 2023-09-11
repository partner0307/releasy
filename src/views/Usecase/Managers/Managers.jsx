import { Box, Typography, useTheme } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Container from 'components/layout/Container';
import { Main } from 'layouts';
import Image from 'next/image';
import React from 'react';

const Managers = () => {
    const theme = useTheme();

    return (
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
                        <Typography variant='h1' component={'div'} align='center'>
                            <Typography variant='h1' component={'span'} color={'secondary'}>Releasy</Typography> for managers
                        </Typography>
                        <Typography variant='body1' align='center'>Releasy provides Project Managers with a clear view of project status and progress, enabling them to make informed decisions and adjust plans as necessary.</Typography>
                    </Box>
                    <Box
                        display={'flex'}
                        flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
                        gap={theme.spacing(4)}
                    >
                        <Box
                            flex={1}
                        >
                            <Image src={'https://releasyapp-crm.s3.amazonaws.com/public/images/use-case/project-managers.jpg'} width={'100%'} height={'100%'} />
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
                                    <Typography variant='subtile1' sx={{ fontWeight: 700 }}>Agile Development</Typography>
                                    <Typography variant='caption'>Releasy is designed to support agile development methodologies, providing Project Managers with the flexibility and agility they need to succeed in today's fast-paced business environment.</Typography>
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
                                    <Typography variant='subtile1' sx={{ fontWeight: 700 }}>Improved Communication</Typography>
                                    <Typography variant='caption'>Releasy facilitates communication among team members and stakeholders, enabling Project Managers to easily obtain feedback and provide updates.</Typography>
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
                                    <Typography variant='subtile1' sx={{ fontWeight: 700 }}>Risk Mitigation</Typography>
                                    <Typography variant='caption'>Releasy can help Project Managers mitigate risks by identifying potential issues and addressing them before they become major problems.</Typography>
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
                                    <Typography variant='subtile1' sx={{ fontWeight: 700 }}>Increased Productivity</Typography>
                                    <Typography variant='caption'>Releasy can help Project Managers increase productivity by identifying and resolving issues more quickly, enabling team members to focus on development tasks.</Typography>
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
                                    <Typography variant='subtile1' sx={{ fontWeight: 700 }}>Enhanced Customer Satisfaction</Typography>
                                    <Typography variant='caption'>Releasy enables Project Managers to ensure that the product meets the needs and expectations of end-users, resulting in increased customer satisfaction and loyalty.</Typography>
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
                                    <Typography variant='subtile1' sx={{ fontWeight: 700 }}>Cost Savings</Typography>
                                    <Typography variant='caption'>Releasy can help Project Managers save money by identifying and resolving issues earlier in the development process, reducing the need for costly fixes later on.</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Main>
    )
}

export default Managers;
import { Box, Typography, useTheme } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Container from 'components/layout/Container';
import { Main } from 'layouts';
import Image from 'next/image';
import React from 'react';

import ManagersImage from 'images/use-case/project-managers.jpg';
import Head from 'next/head';
import Feature from '../Feature';

const Managers = () => {
    const theme = useTheme();
    const title = `Releasy Use Cases - Project Managers`;
    const description =
        'Releasy provides Project Managers with a clear view of project status and progress, enabling them to make informed decisions and adjust plans as necessary';

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
                    content={`https://www.releasyapp.io/use-cases/project-managers`}
                    key="ogurl"
                />
                <link
                    rel="canonical"
                    href={`https://www.releasyapp.io/use-cases/project-managers`}
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
                                sx={{
                                    '& > span': {
                                        width: '100% !important',
                                        height: '100% !important'
                                    },
                                    '& > span > img': {
                                        minWidth: 'fit-content !important'
                                    }
                                }}
                            >
                                <Image src={ManagersImage} alt='managers' title='managers' />
                            </Box>
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                gap={theme.spacing(2)}
                                width={{ xs: '100%', sm: '100%', md: '40%' }}
                            >
                                <Feature
                                    title={'Agile Development'}
                                    description={"Releasy is designed to support agile development methodologies, providing Project Managers with the flexibility and agility they need to succeed in today's fast-paced business environment."}
                                />
                                <Feature
                                    title={'Improved Communication'}
                                    description={"Releasy facilitates communication among team members and stakeholders, enabling Project Managers to easily obtain feedback and provide updates."}
                                />
                                <Feature
                                    title={'Risk Mitigation'}
                                    description={"Releasy can help Project Managers mitigate risks by identifying potential issues and addressing them before they become major problems."}
                                />
                                <Feature
                                    title={'Increased Productivity'}
                                    description={"Releasy can help Project Managers increase productivity by identifying and resolving issues more quickly, enabling team members to focus on development tasks."}
                                />
                                <Feature
                                    title={'Enhanced Customer Satisfaction'}
                                    description={"Releasy enables Project Managers to ensure that the product meets the needs and expectations of end-users, resulting in increased customer satisfaction and loyalty."}
                                />
                                <Feature
                                    title={'Cost Savings'}
                                    description={"Cost Savings"}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Main>
        </>
    )
}

export default Managers;
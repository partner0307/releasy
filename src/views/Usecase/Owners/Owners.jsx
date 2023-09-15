import { Box, Typography, useTheme } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Container from 'components/layout/Container';
import { Main } from 'layouts';
import Image from 'next/image';
import React from 'react';

import OwnersImage from 'images/use-case/project-owners.jpg';
import Head from 'next/head';
import Feature from '../Feature';

const Owners = () => {
    const theme = useTheme();
    const title = `Releasy Use Cases - Product Owners`;
    const description =
        'Releasy helps Product Owners to identify and resolve issues earlier in the development process, enabling them to bring products to market faster.';

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
                    content={`https://www.releasyapp.io/use-cases/product-owners`}
                    key="ogurl"
                />
                <link
                    rel="canonical"
                    href={`https://www.releasyapp.io/use-cases/product-owners`}
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
                                <Typography variant='h1' component={'span'} color={'secondary'}>Releasy</Typography> for owners
                            </Typography>
                            <Typography variant='body1' align='center'>Releasy helps Product Owners to identify and resolve issues earlier in the development process, enabling them to bring products to market faster.</Typography>
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
                                <Image src={OwnersImage} alt='owners' title='owners' />
                            </Box>
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                gap={theme.spacing(2)}
                                width={{ xs: '100%', sm: '100%', md: '40%' }}
                            >
                                <Feature
                                    title={'Seamless Integration'}
                                    description={'Releasy integrates seamlessly with other project management tools and software, enabling Product Owners to work more efficiently and effectively.'}
                                />
                                <Feature
                                    title={'Increased Customer Satisfaction'}
                                    description={'Releasy helps Product Owners ensure that their product meets user needs and expectations, resulting in increased customer satisfaction and loyalty.'}
                                />
                                <Feature
                                    title={'Better Collaboration'}
                                    description={'Releasy facilitates collaboration among team members and stakeholders, enabling Product Owners to obtain feedback and make necessary changes more quickly and efficiently.'}
                                />
                                <Feature
                                    title={'Customizable Testing'}
                                    description={'Releasy allows Product Owners to customize their testing process to meet the unique needs of their product and target audience.'}
                                />
                                <Feature
                                    title={'Cost Savings'}
                                    description={'Releasy can help Product Owners save money by identifying and resolving issues earlier in the development process, reducing the need for costly fixes later on.'}
                                />
                                <Feature
                                    title={'Better Visibility'}
                                    description={'Releasy provides Product Owners with greater visibility into the development process, enabling them to monitor progress and make necessary adjustments.'}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Main>
        </>
    )
}

export default Owners;
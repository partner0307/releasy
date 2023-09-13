import { Box, Button, Typography, useTheme } from '@mui/material';
import Container from 'components/layout/Container';
import { Main } from 'layouts';
import Image from 'next/image';
import React from 'react';

import Freelancers from 'images/use-case/developers.jpg';
import Owners from 'images/use-case/project-owners.jpg';
import Managers from 'images/use-case/project-managers.jpg';
import Head from 'next/head';
import Card from './Card';

const contents = [
    {
        image: <Image src={Freelancers} alt='freelancer' title='freelancer' />,
        title: 'Freelancers',
        description: 'Releasy shows clients that the freelancer takes their work seriously and is committed to delivering high-quality work. This can lead to a more professional image and better reputation in the industry.',
        url: '/use-cases/freelancers'
    },
    {
        image: <Image src={Owners} alt='owner' title='owner' />,
        title: 'Product Owners',
        description: 'Releasy helps Product Owners to identify and resolve issues earlier in the development process, enabling them to bring products to market faster.',
        url: '/use-cases/product-owners'
    },
    {
        image: <Image src={Managers} alt='manager' title='manager' />,
        title: 'Project managers',
        description: 'Releasy provides Project Managers with a clear view of project status and progress, enabling them to make informed decisions and adjust plans as necessary.',
        url: '/use-cases/project-managers'
    }
]

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
                            <Typography variant='h1' component={'h1'} align='center'>
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
                            {contents.map((p, i) => (
                                <Card item={p} key={i}/>
                            ))}
                        </Box>
                    </Box>
                </Container>
            </Main>
        </>
    )
}

export default UseCase;
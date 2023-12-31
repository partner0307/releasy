import { Box, Typography, useTheme } from '@mui/material';
import Container from 'components/layout/Container';
import { Main } from 'layouts';
import moment from 'moment';
import Head from 'next/head';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const Terms = ({ terms }) => {
    const theme = useTheme();
    const title = `Releasy - Company terms`;
    const description = 'Releasy terms of service';
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
                    content={`https://www.releasyapp.io/terms`}
                    key="ogurl"
                />
                <link rel="canonical" href={`https://www.releasyapp.io/terms`} />
            </Head>
            <Main>
                <Container>
                    <Box
                        padding={theme.spacing(0, 0, 13)}
                    >
                        <Typography
                            variant={'h1'}
                            component={'h1'}
                            gutterBottom
                            align={'center'}
                        >
                            Terms and Conditions
                        </Typography>
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={theme.spacing(0.5)}
                            padding={(theme.spacing(2, 0, 3))}
                        >
                            <Typography>
                                Last modified on{' '}
                                <strong>
                                    {moment(terms[0].publishedAt).format('MMMM Do YYYY')}
                                </strong>
                            </Typography>
                            <Typography>
                                Version {terms[0].version}
                            </Typography>
                        </Box>
                        <Box
                            paddingTop={'0 !important'}
                            position={'relative'}
                            top={0}
                        >
                            <Typography component={'p'} color={'text.secondary'}>
                                <ReactMarkdown>{terms[0].content}</ReactMarkdown>
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Main>
        </>
    )
}

export default Terms;
import { Box, Typography, useTheme } from '@mui/material';
import Container from 'components/layout/Container';
import { Main } from 'layouts';
import Head from 'next/head';
import React from 'react';
import Map from './component/Map';
import ContactForm from './component/ContactForm';

const ContactUs = () => {
    const theme = useTheme();
    const title = `Releasy - Contact us`;
    const description = 'Contact us - Ask us anything!';
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
                    content={`https://www.releasyapp.io/contact-us`}
                    key="ogurl"
                />
                <link rel="canonical" href={`https://www.releasyapp.io/contact-us`} />
            </Head>
            <Main>
                <Container>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        gap={theme.spacing(4)}
                        padding={theme.spacing(0, 0, 15)}
                    >
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={theme.spacing(2)}
                        >
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                gap={theme.spacing(0.75)}
                            >
                                <Typography variant='h2' component={'h2'} align='center'>Where We Are</Typography>
                                <Typography variant='body1' color="text.secondary" align='center'>
                                    Even if we rely on remote working, and the whole team is remote, we still need a physical location.
                                </Typography>
                            </Box>
                            <Map />
                        </Box>
                        <ContactForm />
                    </Box>
                </Container>
            </Main>
        </>
    )
}

export default ContactUs;
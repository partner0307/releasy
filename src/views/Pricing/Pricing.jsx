import { Box, Button, ButtonGroup, Grid, Typography, useTheme } from '@mui/material';
import Container from 'components/layout/Container';
import { Main } from 'layouts';
import Card from './Card';
import React from 'react';
import Head from 'next/head';

const list = [
    'Up to 2 active users',
    '5 active projects',
    '5 releases per project',
    'Infinite private testers',
    'Testing report (pdf, xlsx)',
    'Public release testing',
    "Personalized testing report's layout",
    'Get paid on release approval',
    'Jira tasks import',
    'Webhooks (http, slack, telegram, discord)'
];

const Pricing = ({ plans }) => {
    if(!plans) {
        return <></>
    }

    const theme = useTheme();
    const [isMonthOrYear, setMonthOrYear] = React.useState(0);
    const title = `Releasy - Flexible and transparent pricing`;
    const description = `Our plans are suited to let you work at best - get started for free`;

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
                    content={`https://www.releasyapp.io/pricing`}
                    key="ogurl"
                />
                <link rel="canonical" href={`https://www.releasyapp.io/pricing`} />
            </Head>
            <Main>
                <Container>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        padding={theme.spacing(0, 0, 15)}
                    >
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={theme.spacing(1.5)}
                        >
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                gap={theme.spacing(0.75)}
                            >
                                <Box
                                    display={'flex'}
                                    flexDirection={'column'}
                                    gap={theme.spacing(0.5)}
                                >
                                    <Typography variant='caption' align='center' sx={{ color: theme.palette.secondary.main }}>Pricing and Plan</Typography>
                                    <Typography variant='h1' align='center'>Find Right Pricing Plan For You</Typography>
                                </Box>
                                <Typography variant='body1' align='center'>Get started with a 15-day trial period. No sign-up or credit card required.</Typography>
                            </Box>
                            <Box
                                display={'flex'}
                                justifyContent={'center'}
                            >
                                <ButtonGroup>
                                    <Button
                                        variant={isMonthOrYear === 0 ? 'contained' : 'outlined'}
                                        onClick={() => setMonthOrYear(0)}
                                        sx={{
                                            background: isMonthOrYear === 0 && '#8752F6',
                                            borderColor: isMonthOrYear === 1 && '#929292',
                                            '&:hover': {
                                                background: '#8752F6',
                                                borderColor: '#8752F6'
                                            }
                                        }}
                                    >
                                        Monthly
                                    </Button>
                                    <Button
                                        variant={isMonthOrYear === 1 ? 'contained' : 'outlined'}
                                        onClick={() => setMonthOrYear(1)}
                                        sx={{
                                            background: isMonthOrYear === 1 && '#8752F6',
                                            borderColor: isMonthOrYear === 0 && '#929292',
                                            '&:hover': {
                                                background: '#8752F6',
                                                borderColor: '#8752F6'
                                            }
                                        }}
                                    >
                                        Yearly
                                    </Button>
                                </ButtonGroup>
                            </Box>
                            <Grid container spacing={{ xs: 3, sm: 4, md: 3, lg: 4 }}>
                                {plans
                                    .filter(p => p.active)
                                    .filter(p => p.monthly === !Boolean(isMonthOrYear))
                                    .map((item, i) => (
                                        <Grid item xs={12} sm={6} md={4}>
                                            <Card item={item} step={i} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Main>
        </>
    )
}

export default Pricing;
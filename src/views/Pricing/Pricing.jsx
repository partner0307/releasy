import { Box, Button, ButtonGroup, Grid, Typography, useTheme } from '@mui/material';
import Container from 'components/layout/Container';
import { Main } from 'layouts';
import Card from './Card';
import React from 'react';

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

const Pricing = () => {
    const theme = useTheme();
    const [isMonthOrYear, setMonthOrYear] = React.useState(0);

    return (
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
                        <Grid container spacing={{ xs: 3, sm: 4, md: 5, lg: 8 }}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card list={list} step={0} price={isMonthOrYear === 0 ? '9.90$' : '99.00$'} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card list={list} step={1} price={isMonthOrYear === 0 ? '14.90$' : '149.00%'} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card list={list} step={2} price={isMonthOrYear === 0 ? '29.90$' : '299.00$'} />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Main>
    )
}

export default Pricing;
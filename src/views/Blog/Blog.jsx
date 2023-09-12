import { Box, Typography, useTheme } from '@mui/material';
import Container from 'components/layout/Container';
import { Main } from 'layouts';
import React from 'react';

const Blog = () => {
    const theme = useTheme();
    
    return (
        <Main>
            <Container>
                <Box
                    padding={theme.spacing(0, 0, 12)}
                >
                    <Typography variant='h1' component={'h1'} align='center'>Coming Soon</Typography>
                </Box>
            </Container>
        </Main>
    )
}

export default Blog;
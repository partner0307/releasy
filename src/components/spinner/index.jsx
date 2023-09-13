import { Box, CircularProgress, useTheme } from '@mui/material';
import React from 'react';

const Spinner = () => {
    const theme = useTheme();

    return (
        <Box padding={theme.spacing(0, 0, 15)} display={'flex'} justifyContent={'center'}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress color="secondary" />
            </Box>
        </Box>
    )
}

export default Spinner;
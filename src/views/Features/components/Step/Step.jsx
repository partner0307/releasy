import { Box, Typography, useTheme } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from 'react';
import Image from 'next/image';

const Step = ({ title, subtitle, list, image, index }) => {
    const theme = useTheme();

    return (
        <Box
            display={'flex'}
            flexDirection={{ xs: 'column', sm: 'column', md: index%2 == 1 ? 'row-reverse' : 'row' }}
            justifyContent={'space-between'}
            alignItems={'center'}
            gap={theme.spacing(5)}
        >
            <Box
                display={'flex'}
                flexDirection={'column'}
                flex={1}
                gap={theme.spacing(2.5)}
            >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    gap={theme.spacing(1)}
                >
                    <Typography variant='h4'>{title}</Typography>
                    <Typography variant='subtitle1'>{subtitle}</Typography>
                </Box>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    gap={theme.spacing(1)}
                >
                    {list.map((p, i) => (
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            gap={theme.spacing(0.5)}
                            key={i}
                        >
                            <CheckCircleIcon sx={{ color: theme.palette.success.main, fontSize: theme.spacing(1.25) }} />
                            <Typography variant='caption'>{p}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box
                width={{ xs: 1, sm: 0.6, md: 0.45 }}
            >
                <Image src={image} />
            </Box>
        </Box>
    )
}

export default Step;
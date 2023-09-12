import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, FormHelperText, InputBase, Typography, useMediaQuery } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import * as yup from 'yup';
import StrapiClient from 'lib/Strapi';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';

const validationSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required'),
});

const Newsletter = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    const initialValues = {
        email: '',
    };

    const onSubmit = async (values, { resetForm }) => {
    const { data, error, meta } = await StrapiClient.from('newsletters').create(
        values,
    );
    if (error) {
        toast.error(error.message);
    } else {
        toast.success('Request sent successfully');
        resetForm();
    }
    };
    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit,
    });

    return (
        <Box
            position={'absolute'}
            top={theme.spacing(-10.5)}
            left={{ xs: '5%', sm: '10%', md: '10%' }}
            right={{ xs: '5%', sm: '10%', md: '10%' }}
            display={'flex'}
            flexDirection={'column'}
            gap={theme.spacing(1.3)}
            padding={{ xs: theme.spacing(2.7, 1), sm: theme.spacing(2.7, 3), md: theme.spacing(2.7, 6), lg: theme.spacing(2.7, 9.8) }}
            sx={{
            borderRadius: theme.spacing(0.625),
            background: '#FBFBFB',
            boxShadow: '0px 15px 40px 0px rgba(196, 196, 196, 0.25)'
            }}
        >
            <Box
                display={'flex'}
                flexDirection={'column'}
                gap={theme.spacing(0.75)}
            >
            <Typography variant='h3'>Subscribe to our newsletter</Typography>
            <Typography variant='body1'>Don't miss the chance to be one of the first to know about our news and updates.</Typography>
            </Box>
            <Box
                display={'flex'}
                flexDirection={'column'}
                gap={theme.spacing(0.2)}
            >
            <Box
                display={'flex'}
                flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
                gap={{ xs: theme.spacing(1), sm: theme.spacing(1), md: 0 }}
                width={'100%'}
            >
                <Box
                    flex={1}
                    padding={theme.spacing(0.9, 1.3)}
                    sx={{
                            border: `0.5px solid ${theme.palette.common.black}`,
                            borderRadius: {
                            xs: `${theme.spacing(0.3125)} ${theme.spacing(0.3125)} ${theme.spacing(0.3125)} ${theme.spacing(0.3125)}`,
                            sm: `${theme.spacing(0.3125)} ${theme.spacing(0.3125)} ${theme.spacing(0.3125)} ${theme.spacing(0.3125)}`,
                            md: `${theme.spacing(0.3125)} 0 0 ${theme.spacing(0.3125)}`
                        },
                    }}
                >
                <FormControl fullWidth>
                    <InputBase
                        type='email'
                        name='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder='Your Email Address'
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        autoComplete='off'
                        fullWidth
                    />
                </FormControl>
                </Box>
                {!isMd && <FormHelperText sx={{ color: theme.palette.error.main }}>{formik.touched.email && formik.errors.email}</FormHelperText>}
                <Button
                    padding={theme.spacing(0.9, 1.5)}
                    sx={{
                        background: '#8752F6',
                        color: theme.palette.common.white,
                        borderRadius: {
                        xs: `${theme.spacing(0.3125)} ${theme.spacing(0.3125)} ${theme.spacing(0.3125)} ${theme.spacing(0.3125)}`,
                        sm: `${theme.spacing(0.3125)} ${theme.spacing(0.3125)} ${theme.spacing(0.3125)} ${theme.spacing(0.3125)}`,
                        md: `0 ${theme.spacing(0.3125)} ${theme.spacing(0.3125)} 0`
                        },
                        '&:hover': {
                        background: '#8752F6'
                        }
                    }}
                    onClick={formik.handleSubmit}
                >
                Subscribe
                <NotificationsIcon sx={{ color: theme.palette.common.white }} />
                </Button>
            </Box>
            {isMd && <FormHelperText sx={{ color: theme.palette.error.main }}>{formik.touched.email && formik.errors.email}</FormHelperText>}
            </Box>
        </Box>
        )
    }

    export default Newsletter;
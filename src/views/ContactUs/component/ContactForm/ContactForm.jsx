import { Box, Button, TextField, Typography, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import React from 'react';

const validationSchema = yup.object({
    email: yup.string().trim().email('Please enter a valid email address').required('Email is required'),
    firstname: yup.string().trim().required('First Name is required'),
    lastname: yup.string().trim().required('Last Name is required'),
    phone: yup.string().trim().required('Phone Number is required'),
    message: yup.string().trim().required('Message is required')
});

const SubmitForm = () => {
    const theme = useTheme();

    const initialValues = {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        company: '',
        message: ''
    };

    const onSubmit = async (values, { resetForm }) => {
        const { data, error, meta } = await StrapiClient.from(
            'contact-forms',
        ).create(values);
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
            display={'flex'}
            flexDirection={'column'}
            gap={theme.spacing(2)}
        >
            <Toaster />
            <Typography variant="h2" component={'h2'} align='center'>
                Contact Us
            </Typography>
            <Box
                display={'flex'}
                flexDirection={'column'}
                gap={theme.spacing(1)}
            >
                <Box
                    display={'flex'}
                    flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
                    gap={{ xs: theme.spacing(1), sm: theme.spacing(1), md: theme.spacing(3)}}
                >
                    <TextField
                        type='text'
                        label="First Name"
                        name='firstname'
                        variant="standard"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                        helperText={formik.touched.firstname && formik.errors.firstname}
                        fullWidth
                        autoComplete='off'
                    />
                    <TextField
                        type='text'
                        label="Last Name"
                        name='lastname'
                        variant="standard"
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                        helperText={formik.touched.lastname && formik.errors.lastname}
                        fullWidth
                        autoComplete='off'
                    />
                </Box>
                <Box
                    display={'flex'}
                    flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
                    gap={{ xs: theme.spacing(1), sm: theme.spacing(1), md: theme.spacing(3)}}
                >
                    <TextField
                        type='email'
                        label="Email"
                        name='email'
                        variant="standard"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        fullWidth
                        autoComplete='off'
                    />
                    <TextField
                        type='text'
                        label="Phone Number"
                        name='phone'
                        variant="standard"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                        fullWidth
                        autoComplete='off'
                    />
                </Box>
                <TextField
                    type='text'
                    label="Company"
                    name='company'
                    variant="standard"
                    value={formik.values.company}
                    onChange={formik.handleChange}
                    fullWidth
                    autoComplete='off'
                />
                <TextField
                    type='text'
                    label="Message"
                    name='message'
                    variant="standard"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                    minRows={5}
                    multiline
                    fullWidth
                    autoComplete='off'
                />
                <Box
                    display={'flex'}
                    justifyContent={'flex-end'}
                >
                    <Button
                        variant='contained'
                        color='primary'
                        size='large'
                        sx={{
                            borderRadius: theme.spacing(6.25),
                            padding: theme.spacing(0.8, 3)
                        }}
                        onClick={formik.handleSubmit}
                    >Submit</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default SubmitForm;
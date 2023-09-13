import { Box, Button, TextField, Typography, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import React from 'react';

const validationSchema = yup.object({
    email: yup.string().trim().email('Please enter a valid email address').required('Email is required'),
    name: yup.string().trim().required('Name is required'),
    message: yup.string().trim().required('Message is required')
});

const SubmitForm = () => {
    const theme = useTheme();

    const initialValues = {
        name: '',
        email: '',
        message: ''
    };

    const onSubmit = async (values, { resetForm }) => {
        toast.success('Submitted successfully');
        resetForm();
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
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Leave Comment
            </Typography>
            <Box
                display={'flex'}
                flexDirection={'column'}
                gap={theme.spacing(1)}
            >
                <Box
                    display={'flex'}
                    gap={theme.spacing(3)}
                >
                    <TextField
                        type='text'
                        label="Name"
                        name='name'
                        variant="standard"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        fullWidth
                        autoComplete='off'
                    />
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
                </Box>
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
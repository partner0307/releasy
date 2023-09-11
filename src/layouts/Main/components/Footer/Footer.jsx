import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Button, FormControl, FormHelperText, InputBase, Typography, useMediaQuery } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import PlaceIcon from '@mui/icons-material/Place';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from 'next/link';
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

const Footer = () => {
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
      position={'relative'}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={{ xs: 'center', sm: 'center', md: 'flex-start' }}
      flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
      gap={{ xs: theme.spacing(2), sm: theme.spacing(3) }}
      padding={{ xs: theme.spacing(15, 1, 2.5), sm: theme.spacing(13, 3, 2.5), md: theme.spacing(12, 6.88, 2.5) }}
    >
      <Box
        position={'absolute'}
        top={theme.spacing(-8.5)}
        left={{ xs: '5%', sm: '10%', md: '20%' }}
        right={{ xs: '5%', sm: '10%', md: '20%' }}
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
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={theme.spacing(1.5)}
        flex={1}
        maxWidth={{ xs: '100%', sm: '100%', md: theme.spacing(25) }}
      >
        <Box
          display={'flex'}
          component="a"
          href="/"
          width={theme.spacing(11)}
        >
          <Box
            component={'img'}
            src={'https://releasyapp-crm.s3.amazonaws.com/public/logo-only/logo-no-background.svg'}
            height={1}
            width={1}
            alt="logo"
          />
        </Box>
        <Typography variant='body1'>When you visit or interact with our sites, services or tools, we or our authorized service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.</Typography>
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={theme.spacing(1)}
        >
          <Box
            display={'flex'}
            alignItems={'center'}
            gap={theme.spacing(0.5)}
          >
            <MailIcon sx={{ color: '#777' }} />
            <Typography variant='body1' sx={{ color: '#777' }}>support@releasyapp.com</Typography>
          </Box>
          <Box
            display={'flex'}
            alignItems={'center'}
            gap={theme.spacing(0.5)}
          >
            <PlaceIcon sx={{ color: '#777' }} />
            <Typography variant='body1' sx={{ color: '#777' }}>33024 US Highway 19 North, Palm Harbor, FL. US 34684</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        gap={{ xs: theme.spacing(2), sm: theme.spacing(10), md: theme.spacing(5) }}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={theme.spacing(1.5)}
        >
          <Typography variant='subtitle1' fontWeight={600}>Company</Typography>
          <Box
            display={'flex'}
            flexDirection={'column'}
            gap={theme.spacing(1)}
          >
            <Link href='/about-us'><Typography variant='body1' sx={{ cursor: 'pointer' }}>About Us</Typography></Link>
            <Link href='/features'><Typography variant='body1' sx={{ cursor: 'pointer' }}>Features</Typography></Link>
            <Link href='/use-cases'><Typography variant='body1' sx={{ cursor: 'pointer' }}>Use Cases</Typography></Link>
            <Link href='/blog'><Typography variant='body1' sx={{ cursor: 'pointer' }}>Blog</Typography></Link>
            <Link href='/pricing'><Typography variant='body1' sx={{ cursor: 'pointer' }}>Pricing</Typography></Link>
          </Box>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={theme.spacing(1.5)}
        >
          <Typography variant='subtitle1' fontWeight={600}>Releasy for</Typography>
          <Box
            display={'flex'}
            flexDirection={'column'}
            gap={theme.spacing(1)}
          >
            <Link href='/freelancers'><Typography variant='body1' sx={{ cursor: 'pointer' }}>Freelancers</Typography></Link>
            <Link href='/product-owners'><Typography variant='body1' sx={{ cursor: 'pointer' }}>Product Owners</Typography></Link>
            <Link href='/project-managers'><Typography variant='body1' sx={{ cursor: 'pointer' }}>Project Managers</Typography></Link>
            <Link href='/agencies'><Typography variant='body1' sx={{ cursor: 'pointer' }}>Agencies</Typography></Link>
          </Box>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={theme.spacing(1.5)}
        >
          <Typography variant='subtitle1' fontWeight={600}>Contact Us</Typography>
          <Box
            display={'flex'}
            flexDirection={'column'}
            gap={theme.spacing(1)}
          >
            <Link href='/faq'><Typography variant='body1' sx={{ cursor: 'pointer' }}>FAQ</Typography></Link>
            <Link href='/privacy'><Typography variant='body1' sx={{ cursor: 'pointer' }}>Privacy</Typography></Link>
            <Link href='/terms'><Typography variant='body1' sx={{ cursor: 'pointer' }}>Terms</Typography></Link>
            <Link href='/contact-us'><Typography variant='body1' sx={{ cursor: 'pointer' }}>Contact Us</Typography></Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

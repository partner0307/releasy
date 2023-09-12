import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import PlaceIcon from '@mui/icons-material/Place';
import Link from 'next/link';
import Newsletter from 'components/layout/Newsletter';

const Footer = () => {
  const theme = useTheme();

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
      <Newsletter />
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
            <Link href='/use-cases/freelancers'><Typography variant='body1' sx={{ cursor: 'pointer' }}>Freelancers</Typography></Link>
            <Link href='/use-cases/product-owners'><Typography variant='body1' sx={{ cursor: 'pointer' }}>Product Owners</Typography></Link>
            <Link href='/use-cases/project-managers'><Typography variant='body1' sx={{ cursor: 'pointer' }}>Project Managers</Typography></Link>
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

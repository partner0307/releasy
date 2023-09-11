import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Button, InputBase, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import PlaceIcon from '@mui/icons-material/Place';
import NotificationsIcon from '@mui/icons-material/Notifications';


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
      padding={{ xs: theme.spacing(9.5, 1, 2.5), sm: theme.spacing(9.5, 3, 2.5), md: theme.spacing(9.5, 6.88, 2.5) }}
    >
      <Box
        position={'absolute'}
        top={theme.spacing(-8.5)}
        left={'20%'}
        right={'20%'}
        display={{ md: 'flex', sm: 'none', xs: 'none' }}
        flexDirection={'column'}
        gap={theme.spacing(1.3)}
        padding={{ md: theme.spacing(2.7, 6), lg: theme.spacing(2.7, 9.8) }}
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
          width={'100%'}
        >
          <Box
            flex={1}
            padding={theme.spacing(0.9, 1.3)}
            sx={{
              border: `0.5px solid ${theme.palette.common.black}`,
              borderRadius: `${theme.spacing(0.3125)} 0 0 ${theme.spacing(0.3125)}`,
            }}
          >
            <InputBase placeholder='Your Email Address' />
          </Box>
          <Button
            padding={theme.spacing(0.9, 1.5)}
            sx={{
              background: '#8752F6',
              color: theme.palette.common.white,
              borderRadius: `0 ${theme.spacing(0.3125)} ${theme.spacing(0.3125)} 0`
            }}
          >
            Subscribe
            <NotificationsIcon sx={{ color: theme.palette.common.white }} />
          </Button>
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
            <Typography variant='body1'>About Us</Typography>
            <Typography variant='body1'>Features</Typography>
            <Typography variant='body1'>Use Cases</Typography>
            <Typography variant='body1'>Blog</Typography>
            <Typography variant='body1'>Pricing</Typography>
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
            <Typography variant='body1'>Freelancers</Typography>
            <Typography variant='body1'>Product Owners</Typography>
            <Typography variant='body1'>Project Managers</Typography>
            <Typography variant='body1'>Agencies</Typography>
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
            <Typography variant='body1'>FAQ</Typography>
            <Typography variant='body1'>Privacy</Typography>
            <Typography variant='body1'>Terms</Typography>
            <Typography variant='body1'>Contact Us</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

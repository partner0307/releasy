import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

import SimplicityDesign from 'images/landing/discover/simplicity-design.png';
import ValidateFeature from 'images/landing/discover/validate-feature.png';
import BattleTested from 'images/landing/discover/battle-tested.png';
import { Button } from '@mui/material';

const Discover = () => {
  const theme = useTheme();
  const loginUrl = process.env.NEXT_PUBLIC_RELEASY_LOGIN_URL;

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      gap={theme.spacing(4)}
      padding={{ xs: theme.spacing(4.5, 1), sm: theme.spacing(4.5, 4.88), md: theme.spacing(4.5, 6.88) }}
      sx={{
        background: theme.palette.common.white
      }}
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={theme.spacing(0.75)}
      >
        <Typography
          variant='h1'
          component={'div'}
          align='center'
        >
          Discover <Typography variant='span' component={'span'} color='secondary'>Releasy</Typography> for Agile UAT
        </Typography>
        <Typography
          variant='body1'
          align='center'
        >
          Dive into the World of Releasy with a Test Drive of our Landing Page!
        </Typography>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={theme.spacing(5)}
        margin={'auto'}
      >
        <Box
          display={'flex'}
          flexDirection={{ md: 'row', sm: 'column', xs: 'column' }}
          justifyContent={'space-between'}
          alignItems={'center'}
          gap={{ md: theme.spacing(5), sm: theme.spacing(5), xs: theme.spacing(2) }}
        >
          <Box
            display={'flex'}
            flexDirection={'column'}
            gap={theme.spacing(2)}
            flex={1}
          >
            <Box
              display={'flex'}
              flexDirection={'column'}
              gap={theme.spacing(1)}
            >
              <Typography variant='h4' color={theme.palette.danger.main}>Simplicity By Design</Typography>
              <Typography variant='subtitle1'>We know how difficult it can be to have projects tested and approved by clients</Typography>
            </Box>
            <Typography variant='body1' sx={{ fontWeight: 400 }}>To avoid disputes and make the process collaborative and transparent, we came up with an easy solution: We needed a user friendly and secure tool for clients to use.</Typography>
          </Box>
          <Box
            padding={theme.spacing(1, 1.375)}
            width={{ lg: '50%', md: '50%', sm: '80%' }}
            sx={{
              boxShadow: '0px 18px 40px 0px rgba(188, 188, 188, 0.25)',
              borderRadius: theme.spacing(0.5)
            }}
          >
              <Image src={SimplicityDesign} alt='' />
          </Box>
        </Box>
        <Box
          display={'flex'}
          flexDirection={{ md: 'row', sm: 'column-reverse', xs: 'column-reverse' }}
          justifyContent={'space-between'}
          alignItems={'center'}
          gap={{ md: theme.spacing(5), sm: theme.spacing(5), xs: theme.spacing(2) }}
        >
          <Box
            padding={theme.spacing(1, 1.375)}
            width={{ lg: '50%', md: '50%', sm: '80%' }}
            sx={{
              boxShadow: '0px 18px 40px 0px rgba(188, 188, 188, 0.25)',
              borderRadius: theme.spacing(0.5)
            }}
          >
              <Image src={ValidateFeature} alt='' />
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            gap={theme.spacing(2)}
            flex={1}
          >
            <Box
              display={'flex'}
              flexDirection={'column'}
              gap={theme.spacing(1)}
            >
              <Typography variant='h4' color={theme.palette.danger.main}>Validate your Startup features</Typography>
              <Typography variant='subtitle1'>With public release testing, you'll be able to verify and get feedback from a big number of testers.</Typography>
            </Box>
            <Typography variant='body1' sx={{ fontWeight: 400 }}>Ensure customer satisfaction, minimize time and resources, empower data-driven decision-making</Typography>
          </Box>
        </Box>
        <Box
          display={'flex'}
          flexDirection={{ md: 'row', sm: 'column', xs: 'column' }}
          justifyContent={'space-between'}
          alignItems={'center'}
          gap={{ md: theme.spacing(5), sm: theme.spacing(5), xs: theme.spacing(2) }}
        >
          <Box
            display={'flex'}
            flexDirection={'column'}
            gap={theme.spacing(2)}
            flex={1}
          >
            <Box
              display={'flex'}
              flexDirection={'column'}
              gap={theme.spacing(1)}
            >
              <Typography variant='h4' color={theme.palette.danger.main}>Battle tested</Typography>
              <Typography variant='subtitle1'>Releasy has everything your team needs</Typography>
            </Box>
            <Typography variant='body1' sx={{ fontWeight: 400 }}>Are you a Freelancer, a Product owner or Project Manager? Is your's a Startup, a Small agency or Mid-sized company?Our features will satisfy companies at all stages of growth.</Typography>
          </Box>
          <Box
            padding={theme.spacing(1, 1.375)}
            width={{ lg: '50%', md: '50%', sm: '80%' }}
            height={{ lg: '80%', md: '90%', sm: '100%' }}
            sx={{
              boxShadow: '0px 18px 40px 0px rgba(188, 188, 188, 0.25)',
              borderRadius: theme.spacing(0.5)
            }}
          >
              <Image src={BattleTested} alt='' />
          </Box>
        </Box>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'center'}
      >
        <Button
          variant="contained"
          color="primary"
          component="a"
          target="_blank"
          href={loginUrl}
          size="large"
          style={{
            boxShadow: '0px 10px 30px 0px rgba(68, 68, 68, 0.25)',
            padding: theme.spacing(1, 5.5)
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default Discover;

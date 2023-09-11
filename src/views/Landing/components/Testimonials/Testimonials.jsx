import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Script from 'next/script';

const Testimonials = () => {
  const theme = useTheme();

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      gap={theme.spacing(4.25)}
      padding={theme.spacing(5.25, 0, 2.5)}
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={theme.spacing(0.75)}
      >
        <Typography
          variant={'h1'}
          align={'center'}
        >
          Testimonials
        </Typography>
        <Typography
          variant="body1"
          align={'center'}
        >
          Join the fast growing community of freelancers and business owners who
          enjoy Releasy!
        </Typography>
      </Box>
      <div
        className="senja-embed"
        data-id="d33538f5-9604-4e64-abb8-3991320e4bad"
        data-lazyload="true"
      ></div>
      <Script
        strategy="afterInteractive"
        src="https://static.senja.io/dist/platform.js"
      />
    </Box>
  );
};

export default Testimonials;

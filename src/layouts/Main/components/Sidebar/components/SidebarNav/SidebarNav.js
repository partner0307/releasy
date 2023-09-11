import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';

import NavItem from './components/NavItem';
import { Typography } from '@mui/material';

const SidebarNav = ({ colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const loginUrl = process.env.NEXT_PUBLIC_RELEASY_LOGIN_URL;
  const signupUrl = process.env.NEXT_PUBLIC_RELEASY_SIGNUP_URL;
  const [activeLink, setActiveLink] = useState('');

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={'https://releasyapp-crm.s3.amazonaws.com/public/logo-only/logo-no-background.svg'}
            height={1}
            width={1}
            alt="logo"
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <Button style={{ background: 'none' }} size={'large'} component={'a'} href="/features" fullWidth>
            <Typography variant='body1'>Features</Typography>
          </Button>
        </Box>
        <Box>
          <Button style={{ background: 'none' }} size={'large'} component={'a'} href="/use-cases" fullWidth>
            <Typography variant='body1'>Use Cases</Typography>
          </Button>
        </Box>
        <Box>
          <Button style={{ background: 'none' }} size={'large'} component={'a'} href="/blog" fullWidth>
            <Typography variant='body1'>Blog</Typography>
          </Button>
        </Box>
        <Box>
          <Button style={{ background: 'none' }} size={'large'} component={'a'} href="/pricing" fullWidth>
            <Typography variant='body1'>Pricing</Typography>
          </Button>
        </Box>
        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="outlined"
            fullWidth
            component="a"
            rel="nofollow"
            href={loginUrl}
          >
            LOGIN
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            rel="nofollow"
            href={signupUrl}
          >
            SIGN UP FOR FREE
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {};

export default SidebarNav;

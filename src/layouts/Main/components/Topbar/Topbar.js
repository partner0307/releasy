import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const Topbar = ({ onSidebarOpen, colorInvert = false }) => {
  const theme = useTheme();
  const router = useRouter();

  const loginUrl = process.env.NEXT_PUBLIC_RELEASY_LOGIN_URL;
  const signupUrl = process.env.NEXT_PUBLIC_RELEASY_SIGNUP_URL;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      paddingTop={1}
      paddingBottom={.5}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        width={{ xs: 200, md: 180 }}
      >
        <Box
          component={'img'}
          src={'https://releasyapp-crm.s3.amazonaws.com/public/logo-only/logo-no-background.svg'}
          height={{ md: 1, sm: 0.8, xs: 0.5 }}
          width={{ md: 1, sm: 0.8, xs: 0.5 }}
          alt="logo"
        />
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }} alignItems={'center'} gap={theme.spacing(2)}>
        <Box
          display={'flex'}
          alignItems={'center'}
          gap={theme.spacing(1.5)}
        >
          <Link
            underline="none"
            component="a"
            href="/features"
            color={router.pathname === '/features' ? theme.palette.secondary.main : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Typography variant='body1'>Features</Typography>
          </Link>
          <Link
            underline="none"
            component="a"
            href="/use-cases"
            color={router.pathname === '/use-cases' ? theme.palette.secondary.main : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Typography variant='body1'>Use Cases</Typography>
          </Link>
          <Link
            underline="none"
            component="a"
            href="/blog"
            color={router.pathname === '/blog' ? theme.palette.secondary.main : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Typography variant='body1'>Blog</Typography>
          </Link>
          <Link
            underline="none"
            component="a"
            href="/pricing"
            color={router.pathname === '/pricing' ? theme.palette.secondary.main : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Typography variant='body1'>Pricing</Typography>
          </Link>
          <Link
            underline="none"
            component="a"
            href={loginUrl}
            color={router.pathname === '/nofollow' ? theme.palette.secondary.main : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Typography variant='body1'>Login</Typography>
          </Link>
        </Box>
        <Button
          variant="contained"
          color='primary'
          component="a"
          target="_blank"
          href={signupUrl}
          size="large"
          style={{
            boxShadow: 'none'
          }}
        >
          SIGN UP FOR FREE
        </Button>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <MenuIcon color='disabled' onClick={() => onSidebarOpen()} />
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  colorInvert: PropTypes.bool,
};

export default Topbar;

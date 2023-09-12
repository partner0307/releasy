import Container from 'components/layout/Container';
import Main from 'layouts/Main';
import {
  Categories,
  Hero,
  Services,
  Discover,
  Testimonials,
  Advertise
} from './components';
import { Box, useTheme } from '@mui/material';

const LandingPage = () => {
  const theme = useTheme();

  return (
    <Main>
      <Box position={'relative'} overflow={'hidden'}>
        <Box
          component={'div'}
          position={'absolute'}
          bottom={theme.spacing(20)}
          left={theme.spacing(-20)}
          style={{
            width: theme.spacing(52),
            height: theme.spacing(52),
            background: 'rgba(255, 199, 116, 0.30)',
            filter: 'blur(200px)',
            zIndex: 0
          }}
        />
        <Box
          component={'div'}
          position={'absolute'}
          bottom={theme.spacing(20)}
          right={theme.spacing(-20)}
          style={{
            width: theme.spacing(52),
            height: theme.spacing(52),
            background: 'rgba(148, 164, 196, 0.40)',
            filter: 'blur(200px)',
            zIndex: 0
          }}
        />
        <Container>
          <Hero />
        </Container>
      </Box>
      <Box
        sx={{
          background: theme.palette.common.white
        }}
      >
        <Container>
          <Services />
        </Container>
      </Box>
      <Container>
        <Categories />
      </Container>
      <Box
        sx={{
          background: theme.palette.common.white
        }}
      >
        <Container>
          <Discover />
        </Container>
      </Box>
      <Container>
        <Testimonials />
      </Container>
      <Box position={'relative'} overflow={'hidden'}>
        <Box
          position={'absolute'}
          right={theme.spacing(30.5)}
          bottom={theme.spacing(12.5)}
          width={theme.spacing(23.5625)}
          height={theme.spacing(18)}
          sx={{
              background: 'rgba(255, 217, 161, 0.40)',
              filter: 'blur(100px)',
              zIndex: 0
          }}
        />
        <Box
          position={'absolute'}
          right={theme.spacing(6.5)}
          bottom={theme.spacing(12.5)}
          width={theme.spacing(23.5625)}
          height={theme.spacing(18)}
          sx={{
              background: 'rgba(118, 98, 241, 0.30)',
              filter: 'blur(100px)',
              zIndex: 0
          }}
        />
        <Container>
          <Advertise />
        </Container>
      </Box>
    </Main>
  );
};

export default LandingPage;

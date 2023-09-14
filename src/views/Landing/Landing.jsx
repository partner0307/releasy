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
      <Box
        position={'relative'}
        overflow={'hidden'}
      >
        <Container>
          <Advertise />
        </Container>
      </Box>
    </Main>
  );
};

export default LandingPage;

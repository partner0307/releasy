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

const LandingPage = () => {
  return (
    <Main>
      <Container>
        <Hero />
      </Container>
      <Services />
      <Container>
        <Categories />
      </Container>
      <Discover />
      <Container>
        <Testimonials />
      </Container>
      <Container>
        <Advertise />
      </Container>
    </Main>
  );
};

export default LandingPage;

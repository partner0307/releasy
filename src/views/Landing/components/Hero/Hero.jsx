import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { TypeAnimation } from 'react-type-animation';
import Review from 'components/home/hero/Review';

const Hero = () => {
  const loginUrl = process.env.NEXT_PUBLIC_RELEASY_LOGIN_URL;
  const theme = useTheme();

  return (
    <Box
      position={'relative'}
      paddingBottom={theme.spacing(4.5)}
    >
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
      <Grid container spacing={4}>
        <Grid item alignItems={'top'} xs={12} md={12}>
          <Box marginBottom={1} align={'center'}>
            <Typography
              variant={"h1"}
              component={'div'}
              color={theme.palette.common.black}
              align={'center'}
              
            >
              Simplify quality assurance with Releasy
              <Typography
                variant={'h1'}
                component={'div'}
                color={theme.palette.primary.main}
              >
                <TypeAnimation
                  sequence={[
                    'for freelancers',
                    2000,
                    'for project managers',
                    2000,
                    'for product owners',
                    2000,
                    'for agile teams',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: 'inline-block' }}
                  repeat={Infinity}
                />
              </Typography>
            </Typography>
            <Box
              component={'div'}
              width={{ md: theme.spacing(33.125), sm: theme.spacing(15), xs: theme.spacing(10) }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 530 22" fill="none">
                <path d="M2.53186 5.95776C220.564 0.370207 524.065 2.81476 525.81 4.9101C553.718 7.00543 55.7318 12.9422 41.7777 16.0852C27.8236 19.2282 187.423 17.1329 343.535 18.5298" stroke="#FFCE59" strokeWidth="5" strokeLinecap="round" strokeDasharray="0.61 0.61"/>
              </svg>
            </Box>
          </Box>

          <Box marginTop={1}>
            <Typography
              variant={'body1'}
              component={'div'}
              color={theme.palette.common.black}
              gutterBottom
              align={'center'}
            >
              Releasy allows your clients, even those without a technical background to test, validate, and accept project releases with ease.
            </Typography>
          </Box>
          <Box
            display={'flex'}
            justifyContent={'center'}
            marginTop={theme.spacing(2)}
          >
            <Button
              variant="contained"
              color="primary"
              component="a"
              target="_blank"
              rel="nofollow"
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

          <Box align={'center'} position={'relative'} overflow={'hidden'} mt={5} mx={'auto'}>
            <div
              style={{
                position: 'relative',
                paddingBottom: 'calc(64.5% + 44px)',
                height: 0,
              }}
            >
              <iframe
                src="https://app.supademo.com/embed/zVhA4L-2-WkkLrrvFyRgt"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              ></iframe>
            </div>
          </Box>
          <Box
            display={'flex'}
            flexDirection={{ md: 'row', sm: 'column', xs: 'column' }}
            alignItems={'center'}
            gap={{ lg: theme.spacing(10), md: theme.spacing(0) }}
            paddingTop={theme.spacing(8)}
          >
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              flexDirection={{ md: 'column', sm: 'row', xs: 'row' }}
              gap={theme.spacing(3)}
            >
              <Box>
                <Typography variant='h4' color={theme.palette.primary.main}>100+</Typography>
                <Typography variant='h4' color={theme.palette.common.black}>Projects</Typography>
              </Box>
              <Box>
                <Typography variant='h4' color={theme.palette.primary.main}>300+</Typography>
                <Typography variant='h4' color={theme.palette.common.black}>Release</Typography>
              </Box>
            </Box>
            <Grid container direction={'row'}>
              <Grid item xs={12} sm={6} md={4}>
                <Review />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Review />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Review />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;

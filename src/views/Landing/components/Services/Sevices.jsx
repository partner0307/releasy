import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import ClientImage from 'images/landing/service/non-technical.png';
import DesignImage from 'images/landing/service/designed-easy.png';
import ApprovalImage from 'images/landing/service/trust-approval.png';
import AgileImage from 'images/landing/service/agile-principle.png';

const mock = [
  {
    title: 'Built for non technical clients',
    subtitle:
      'Too often, clients fail to properly test a release and sometimes approve releases without even seeing them. Releasy allows you to clearly define what to test, how to test it and the acceptance criteria.',
    image: (
      <>
        <Image src={ClientImage} style={{ width: '100%', height: '100%' }} alt='client' title='client' />
      </>
    ),
  },
  {
    title: 'Designed to be easy',
    subtitle:
      "Releasy is designed to make your client's life easier during user acceptance testing. Approval and rejection of releases is possible with just one click.",
    image: (
      <Image src={DesignImage} style={{ width: '100%', height: '100%' }} alt='design' title='design' />
    ),
  },
  {
    title: 'Verified trusted approvals',
    subtitle:
      'Once a release is tested, Releasy generates a PDF document which serves as validation proof of testing and acceptance for both parties.',
    image: (
      <>
        <Image src={ApprovalImage} style={{ width: '100%', height: '100% !important' }} alt='approval' title='approval' />
      </>
    ),
  },
  {
    title: 'Follow agile principles',
    subtitle:
      "Continuously refine the testing process in alignment with your Sprint schedule, persisting until the client's complete satisfaction is achieved.",
    image: (
      <>
        <Image src={AgileImage} style={{ width: '100%', height: '100%' }} alt='priciple' title='priciple' />
      </>
    ),
  },
];

const Services = () => {
  const theme = useTheme();
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      gap={theme.spacing(4)}
      padding={{ xs: theme.spacing(5.12, 1, 6.5), sm: theme.spacing(5.12, 3.88, 6.5), md: theme.spacing(5.12, 6.88, 6.5) }}
      sx={{
        background: theme.palette.common.white
      }}
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={theme.spacing(0.5)}
      >
        <Typography
          variant='caption'
          color={'secondary'}
          align='center'
        >
          customer satisfaction, minimize time and resource investments
        </Typography>
        <Typography
          variant='h1'
          component={'div'}
          align='center'
        >
          Streamline Your Business with&nbsp;
          <Typography
            variant='span'
            color={'secondary'}
          >Releasy</Typography>
        </Typography>
        <Typography variant='body1'>Releasy helps you keep customers happy, save time and resources, and make smart business decisions.</Typography>
      </Box>
      <Grid container spacing={2} justifyContent={'center'}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} lg={4} xl={3} key={i}>
            <Box
              width={1}
              height={1}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  width={theme.spacing(11.5625)}
                  height={theme.spacing(9.625)}
                  marginBottom={2}
                >
                  {item.image}
                </Box>
                <Typography
                  variant={'subtitle1'}
                  sx={{ fontWeight: '700' }}
                  gutterBottom
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="text.secondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;

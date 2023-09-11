/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { colors, useTheme } from '@mui/material';

const mock = [
  {
    color: colors.lightBlue[500],
    title: 'Create projects',
    subtitle:
      'Transparently satisfy your clients needs and get paid for your hard work.'
  },
  {
    color: colors.purple[500],
    title: 'Define releases',
    subtitle: 'Follow all agile principles and test every project release.'
  },
  {
    color: colors.yellow[500],
    title: 'Add features/user stories for testing',
    subtitle: 'Define what to test, how to test and the acceptance criteria.'
  },
  {
    color: colors.indigo[500],
    title: 'Invite clients or testers',
    subtitle: 'With one click, your client is now an active collaborator!'
  },
  {
    color: colors.red[500],
    title: 'Test the release',
    subtitle: 'Everything that needs to be approved ...all on one page.'
  },
  {
    color: colors.deepPurple[500],
    title: 'Approve or reject the release',
    subtitle: "Two buttons -accept or reject- it's that easy!"
  },
  {
    color: colors.green[500],
    title: 'Generate testing reports',
    subtitle: 'Approved or rejected, the documentation matters!'
  },
  {
    color: colors.orange[500],
    title: 'Clone or generate new versions',
    subtitle:
      'Clone or generate new versions and iterate until the project is completed.'
  },
  {
    color: colors.grey[500],
    title: 'Integrate with external tools',
    subtitle:
      'Send event notifications to Slack, Telegram and Discord or any API'
  },
];

const Categories = () => {
  const theme = useTheme();
  const loginUrl = process.env.NEXT_PUBLIC_RELEASY_LOGIN_URL;

  return (
    <Box padding={theme.spacing(5.75, 0, 4)}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={theme.spacing(0.75)}
        mb={theme.spacing(1.5)}
      >
        <Typography
          variant={'h1'}
          component={'div'}
          align={'center'}
        >
          Easy UAT with&nbsp;
          <Typography
            variant='h1'
            component={'span'}
            color={'secondary'}
          >
            Releasy
          </Typography>
        </Typography>
        <Typography
          variant='body1'
          align='center'
        >
          Releasy simplifies user acceptance testing for non-technical clients.
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={1.5}>
          {mock.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                display={'block'}
                width={1}
                height={1}
              >
                <Box
                  component={Card}
                  padding={theme.spacing(1.5, 2)}
                  borderRadius={2}
                  width={1}
                  height={1}
                  data-aos-delay={i * 100}
                  data-aos-offset={100}
                  data-aos-duration={600}
                >
                  <Box display={'flex'} flexDirection={'column'} gap={theme.spacing(0.5)}>
                    <Typography
                      variant={'subtitle1'}
                      sx={{ fontWeight: 700 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant='body1'
                      color="text.secondary">
                      {item.subtitle}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box marginTop={4} textAlign="center">
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
    </Box>
  );
};

export default Categories;

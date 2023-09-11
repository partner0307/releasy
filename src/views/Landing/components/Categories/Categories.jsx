/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import { colors, useTheme } from '@mui/material';
import DiamondIcon from 'icons/DiamondIcon';
import OvalIcon from 'icons/OvalIcon';
import ListViewIcon from 'icons/ListViewIcon';
import BadgeIcon from 'icons/BadgeIcon';
import ShareIcon from 'icons/ShareIcon';
import CheckBoxIcon from 'icons/CheckBoxIcon';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

const mock = [
  {
    color: colors.lightBlue[500],
    title: 'Create projects',
    subtitle:
      'Transparently satisfy your clients needs and get paid for your hard work.',
    icon: (
      <>
        <DiamondIcon />
      </>
    ),
  },
  {
    color: colors.purple[500],
    title: 'Define releases',
    subtitle: 'Follow all agile principles and test every project release.',
    icon: (
      <>
        <OvalIcon />
      </>
    ),
  },
  {
    color: colors.yellow[500],
    title: 'Add features/user stories for testing',
    subtitle: 'Define what to test, how to test and the acceptance criteria.',
    icon: (
      <>
        <ListViewIcon />
      </>
    ),
  },
  {
    color: colors.indigo[500],
    title: 'Invite clients or testers',
    subtitle: 'With one click, your client is now an active collaborator!',
    icon: (
      <>
        <ShareIcon />
      </>
    ),
  },
  {
    color: colors.red[500],
    title: 'Test the release',
    subtitle: 'Everything that needs to be approved ...all on one page.',
    icon: (
      <>
        <CheckBoxIcon />
      </>
    ),
  },
  {
    color: colors.deepPurple[500],
    title: 'Approve or reject the release',
    subtitle: "Two buttons -accept or reject- it's that easy!",
    icon: (
      <>
        <BadgeIcon />
      </>
    ),
  },
  {
    color: colors.green[500],
    title: 'Generate testing reports',
    subtitle: 'Approved or rejected, the documentation matters!',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        />
      </svg>
    ),
  },
  {
    color: colors.orange[500],
    title: 'Clone or generate new versions',
    subtitle:
      'Clone or generate new versions and iterate until the project is completed.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
  },
  {
    color: colors.grey[500],
    title: 'Integrate with external tools',
    subtitle:
      'Send event notifications to Slack, Telegram and Discord or any API',
    icon: (
      <>
        <SettingsSuggestIcon />
      </>
    ),
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

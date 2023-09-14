import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import Head from 'next/head';
import { Main } from 'layouts';
import Container from 'components/layout/Container';

const Privacy = ({ privacy }) => {
  const theme = useTheme();

  const title = `Releasy Agile User Acceptance Testing: Privacy policy`;
  const description = 'Releasy privacy policy';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="description" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta
            property="og:description"
            content={description}
            key="ogdescription"
        />
        <meta
            property="og:url"
            content={`https://www.releasyapp.io/privacy`}
            key="ogurl"
        />
        <link rel="canonical" href={`https://www.releasyapp.io/privacy`} />
      </Head>
      <Main>
        <Container>
            <Box
                padding={theme.spacing(0, 0, 13)}
            >
                <Typography
                    variant={'h1'}
                    component={'h1'}
                    gutterBottom
                    align='center'
                >
                    Privacy policy
                </Typography>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    gap={theme.spacing(0.5)}
                    padding={theme.spacing(2, 0, 3)}
                >
                    <Typography>
                        Last modified on{' '}
                        <strong>
                            {moment(privacy[0].publishedAt).format('MMMM Do YYYY')}
                        </strong>
                    </Typography>
                    <Typography>
                        Version {privacy[0].version}
                    </Typography>
                </Box>
                <Typography component={'p'} color={'text.secondary'}>
                    <ReactMarkdown>{privacy[0].content}</ReactMarkdown>
                </Typography>
            </Box>
        </Container>
      </Main>
    </>
  );
};

export default Privacy;

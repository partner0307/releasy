import {
  Avatar,
  Box,
  Divider,
  Typography,
  useTheme,
} from '@mui/material';
import Container from 'components/layout/Container';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Main } from 'layouts';
import moment from 'moment';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import SubmitForm from './component/Form/Form';

const BlogArticle = ({ article }) => {
  const theme = useTheme();
  const title = `${article.ogTitle || article.title}`;
  const content = `${article.ogDescription || article.title}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} key="description" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:type" content="article" key="ogtype" />

        <meta
          property="og:description"
          content={article.ogDescription || article.summary}
          key="ogdescription"
        />
        <meta
          property="og:url"
          content={`https://www.releasyapp.io/blog/${article.slug}`}
          key="ogurl"
        />
        <link
          rel="canonical"
          href={`https://www.releasyapp.io/blog/${article.slug}`}
        />
        {article.cover && article.cover && (
          <meta
            property="og:image"
            content={article.cover.formats.large.url}
            key="ogimage"
          />
        )}
      </Head>
      <Main>
            <Container>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    gap={theme.spacing(2)}
                    padding={theme.spacing(0, 0, 13)}
                >
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        gap={theme.spacing(1.5)}
                    >
                        <Typography variant="h3" component={'h3'} align="center">
                            {article.title}
                        </Typography>
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                        >
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                gap={theme.spacing(0.25)}
                            >
                                <Typography variant={'subtitle2'} component={'p'} sx={{ fontWeight: 600 }}>
                                    {article.author.name}
                                </Typography>
                                <Typography variant={'caption'} component={'span'}>
                                    {article.author.bio}
                                </Typography>
                            </Box>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                gap={theme.spacing(0.5)}
                            >
                                <CalendarMonthIcon
                                    sx={{
                                    width: theme.spacing(1.25),
                                    height: theme.spacing(1.25),
                                    }}
                                />
                                <Typography variant="caption" component={'span'}>
                                    {moment(article.publishedAt).format('MMMM Do YYYY')}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        gap={theme.spacing(1)}
                    >
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={theme.spacing(1)}
                        >
                            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                {article.summary}
                            </Typography>
                            {article.cover && (
                                <Box width={1} height={1} overflow={"hidden"}>
                                    <Image
                                    src={article.cover.formats.large.url}
                                    alt="article-image"
                                    loading="lazy"
                                    width={'100%'}
                                    height={400}
                                    objectFit='cover'
                                    />
                                </Box>
                            )}
                        </Box>
                        <Box>
                            <ReactMarkdown>{article.body}</ReactMarkdown>
                        </Box>
                    </Box>
                    <Divider />
                    <SubmitForm />
                </Box>
            </Container>
      </Main>
    </>
  );
};

export default BlogArticle;

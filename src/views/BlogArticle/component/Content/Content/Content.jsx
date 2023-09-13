import React from 'react';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import Image from 'next/image';
import SubmitForm from '../../Form/Form';
import Spinner from 'components/spinner';
import { Box, Divider, Typography, useTheme } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Content = ({ article }) => {
    const theme = useTheme();

    if (!article) {
        return <Spinner />
    }

    return (
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
                        <Box
                            width={1}
                            height={1}
                            overflow={"hidden"}
                            sx={{
                                '& > span': {
                                    width: '100%',
                                    height: '100%'
                                }
                            }}
                        >
                            <Image
                                src={article.cover.formats.large.url}
                                alt="article-image"
                                loading="lazy"
                                width={1440}
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
    )
}

export default Content;
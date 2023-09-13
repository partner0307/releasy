import { Avatar, Box, Card, CardHeader, CardMedia, Typography, useTheme } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Image from 'next/image';
import moment from 'moment';
import React from 'react';

const Article = ({ item }) => {
    const theme = useTheme();
    
    return (
        <Box
            component={'a'}
            rel="canonical"
            href={`/blog/${item.slug}`}
            sx={{
                textDecoration: 'none'
            }}
        >
            <Box
                component={Card}
                display={'flex'}
                flexDirection={'column'}
                gap={theme.spacing(1)}
                padding={theme.spacing(1.5, 1)}
                borderRadius={theme.spacing(0.3125)}
                sx={{
                    '&:hover': {
                        boxShadow: '0px 18px 40px 0px rgba(188, 188, 188, 0.25)',
                        cursor: 'pointer'
                    }
                }}
            >
                <CardHeader
                    title={
                        <Typography
                            variant='h6'
                            component={'p'}
                            sx={{
                                display: '-webkit-box',
                                WebkitLineClamp: '2',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden'
                            }}
                        >{item.title}</Typography>
                    }
                    sx={{
                        padding: 0
                    }}
                />
                <CardMedia
                    component={'img'}
                    image={item.thumb.formats.medium.url}
                    alt="card-image"
                    title={item.title}
                    height={theme.spacing(13.375)}
                />
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
                        <Typography variant={'subtitle2'} component={'p'} sx={{ fontWeight: 600 }}>{item.author.name}</Typography>
                        <Typography variant={'caption'} component={'span'}>{item.author.bio}</Typography>
                    </Box>
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        gap={theme.spacing(0.5)}
                    >
                        <CalendarMonthIcon sx={{ width: theme.spacing(1.25), height: theme.spacing(1.25) }} />
                        <Typography variant='caption'>{moment(item.publishedAt).format('MMMM Do YYYY')}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography
                        variant='body1'
                        component={'p'}
                        sx={{
                            display: '-webkit-box',
                            '-webkit-line-clamp': '3',
                            '-webkit-box-orient': 'vertical',
                            overflow: 'hidden'
                        }}
                    >{item.indexSummary || item.summary}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Article;
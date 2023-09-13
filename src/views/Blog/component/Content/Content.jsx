import { Box, Grid, CircularProgress, Pagination, Stack, Typography, useTheme } from '@mui/material';
import Article from 'components/blog/article';
import StrapiClient from 'lib/Strapi';
import React, { useState, useEffect } from 'react';

const Content = () => {
    const theme = useTheme();
    const [articles, setArticles] = useState(null);
    const [meta, setMeta] = useState(null);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(9);
    const [percent, setPercent] = useState(24);

    useEffect(() => {
        const fetchArticles = async () => {
            const { data, error, meta } = await StrapiClient.from('articles')
                .select(['title', 'summary', 'publishedAt', 'slug', 'indexSummary'])
                .sortBy([{ field: 'publishedAt', order: 'desc' }])
                .populate()
                .paginate(page, perPage)
                .get();
            setArticles(data);
            setMeta(meta);
        };
        try {
            fetchArticles();
        } catch {
            setArticles([]);
        }
    }, [page, perPage]);

    const renderSpinner = () => (
        <Box padding={theme.spacing(0, 0, 15)} display={'flex'} justifyContent={'center'}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress variant="determinate" color="secondary" value={percent} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        variant="caption"
                        component="div"
                        color="text.secondary"
                    >{`${percent}%`}</Typography>
                </Box>
            </Box>
        </Box>
    )

    if (!articles) {
        return renderSpinner()
    }

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            gap={theme.spacing(2)}
            padding={theme.spacing(0, 0, 15)}
        >
            <Box
                display={'flex'}
                flexDirection={'column'}
                gap={theme.spacing(5.25)}
            >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    gap={theme.spacing(0.75)}
                >
                    <Typography variant='h1' component={'h1'} align='center'>Project delivery, Agile and User Acceptance Testing</Typography>
                    <Typography variant='body1' component={'p'} align='center'>Read our latest articles</Typography>
                </Box>
                <Grid container spacing={theme.spacing(1.75)}>
                    {articles.map((p, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <Article item={p} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box
                display={'flex'}
                justifyContent={'flex-end'}
            >
                <Stack>
                    <Pagination
                        count={meta.pagination.pageCount}
                        size="large"
                        showFirstButton
                        showLastButton
                        onChange={(event, page) => setPage(page)}
                    />
                </Stack>
            </Box>
        </Box>
    )
}

export default Content;
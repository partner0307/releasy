import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import FallbackSpinner from 'components/spinner';
import StrapiClient from 'lib/Strapi';
import Article from 'components/blog/article';

const RelatedArticles = ({ currentArticle }) => {
    const theme = useTheme();

    const [articles, setArticles] = useState(null);
    useEffect(() => {
        const fetchArticles = async () => {
        const { data, error, meta } = await StrapiClient.from('articles')
            .select(['title', 'summary', 'publishedAt', 'slug'])
            .sortBy([{ field: 'publishedAt', order: 'desc' }])
            .populate()
            .paginate(1, 4)
            .get();
            setArticles(data.filter(p => p.id !== currentArticle));
        };
        try {
            fetchArticles();
        } catch {
            setArticles([]);
        }
    }, []);

    if (!articles) {
        return <FallbackSpinner />;
    }

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            gap={theme.spacing(1.5)}
            padding={theme.spacing(2, 0, 0)}
        >
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'flex-end'}
            >
                <Typography
                    variant='h5'
                    component={'h5'}
                    sx={{
                        textDecoration: 'underline',
                        textUnderlineOffset: theme.spacing(0.5),
                        textDecorationColor: theme.palette.secondary.main
                    }}
                >Recent Posted</Typography>
                <Typography
                    variant='body1'
                    component={'a'}
                    href='/blog'
                    rel="canonical"
                    color={theme.palette.danger.main}
                    sx={{
                        textDecoration: 'none'
                    }}
                >View All</Typography>
            </Box>
            <Grid container spacing={theme.spacing(1.75)}>
                {articles.map((p, i) => (
                    i < 4 && (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <Article item={p} />
                        </Grid>
                    )
                ))}
            </Grid>
        </Box>
    )
}

export default RelatedArticles;
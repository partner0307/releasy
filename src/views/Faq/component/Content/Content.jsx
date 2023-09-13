import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Spinner from 'components/spinner';
import React from 'react';

const FaqGroupItem = ({ title, items }) => {
    const theme = useTheme();
    return (
        <Box maxWidth={700}>
            <Box marginBottom={2}>
                <Typography fontWeight={700} variant={'subtitle1'}>
                    {title}
                </Typography>
            </Box>
            <Box>
            {items.map((item, i) => (
                <Box
                    component={Accordion}
                    key={i}
                    padding={1}
                    marginBottom={i === item.length - 1 ? 0 : 1}
                    borderRadius={`${theme.spacing(0.5)} !important`}
                    sx={{
                        '&::before': {
                        display: 'none',
                        },
                    }}
                >
                <Box
                    component={AccordionSummary}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel1a-content--${i}`}
                    id={`panel1a-header--${i}`}
                >
                    <Typography fontWeight={600} variant={'body'}>
                        {item.question}
                    </Typography>
                </Box>
                <AccordionDetails>
                    <Typography color="text.secondary">{item.answer}</Typography>
                </AccordionDetails>
                </Box>
            ))}
            </Box>
        </Box>
    );
};

const Content = ({ faqs }) => {
    const theme = useTheme();

    if (!faqs) {
        return <Spinner />
    }

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={theme.spacing(3.5)}
            padding={theme.spacing(0, 0, 15)}
        >
            <Typography variant='h1' component={'h1'} align='center'>Frequently Asked Questions</Typography>
            {Object.keys(faqs).map((k, i) => (
                <FaqGroupItem title={k} items={faqs[k]} />
            ))}
        </Box>
    )
}

export default Content;
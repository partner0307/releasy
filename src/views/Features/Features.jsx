import Head from 'next/head';
import { Main } from 'layouts';
import { Box, Button, Typography, useTheme } from '@mui/material';
import Container from 'components/layout/Container';
import React from 'react';
import { Step } from './components';

import Step1 from 'images/features/1.png';
import Step2 from 'images/features/2.png';
import Step3 from 'images/features/3.png';
import Step4 from 'images/features/4.png';
import Step5 from 'images/features/5.png';
import Step6 from 'images/features/6.png';
import Step7 from 'images/features/7.png';

const steps = [
    {
        title: 'Create Projects',
        subtitle: 'Every project contains one or more releases that need management, review and validation.',
        list: [
            'When a project is active, you can add releases to be tested.',
            'Filling in required information creates a robust displayed in the final testing summary PDF.',
            "The number of releases that can be added varies on your subscription type: be sure to check out the plan that's best for your company's needs!"
        ],
        image: Step1
    },
    {
        title: 'Define Releases',
        subtitle: 'Our service is anchored on releases as its fundamental entity. Your clients will be able to manually test each release iteratively with the goal of having the project thoroughly tested and ultimately accepted.',
        list: [
            'Allow your clients to test releases',
            'If they approve the features then they approve the release.',
            "Cloning old releases can allow for the creation of new versions for approval.",
            "Each tested release, whether approved or declined, will produce a document shared between you and your client."
        ],
        image: Step2
    },
    {
        title: 'Add features / user stories',
        subtitle: 'Every release comprises one or more features that need to be tested. A feature can be a use case or user story.',
        list: [
            'Easily create features by importing stories from Jira or from an Excel file.',
            'Based on your clients needs, you can add details on what to test and how to accept the features.',
            "The built-in WYSIWYG editor will allow you to write user stories with images, text and formatting.",
            "You can also attach files to your features or link to external ones.",
            "Add a detailed step-by-step guide to help your clients through the testing process."
        ],
        image: Step3
    },
    {
        title: 'Invite clients or test it publicly',
        subtitle: 'When you finish developing your release, invite your clients to test it out. Or you can have it tested by unknown testers if you create a public testing.',
        list: [
            'Send a personalized message along with an explanation of what needs testing.',
            'Releasy will send an email to your client with a confidential link to test: no previous registration is required.',
            "Releasy will create a publicly accessible link to test the release if you decide to create a public testing."
        ],
        image: Step4
    },
    {
        title: 'Test the release',
        subtitle: 'From his dashboard, your Client will see all tested releases and those that needs to be tested.',
        list: [
            'Clearly see what to test and what are the acceptance criteria.',
            'Approve or reject every feature with one click.',
            "Upload testing screens.",
            "If a feature is rejected, your client must say why.",
            "If all features are approved, the release is automatically approved."
        ],
        image: Step5
    },
    {
        title: 'Generate a testing report',
        subtitle: 'A testing report (PDF and Excel) is automatically generated after a completed release test.',
        list: [
            'The testing contains all the information needed to track the testing.',
            'The PDF report can be personalized for your business with logos, headers and footers.',
            "The report is saved and shared only between you and your client, once generated, it cannot be modified by anyone else."
        ],
        image: Step6
    },
    {
        title: 'Add integrations',
        subtitle: 'Connect Releasy with your tools in our Integration section.',
        list: [
            'Import features directly from Jira without rewriting them.',
            'Set up one or more webhooks to send notifications on feature approval/rejection and release approval/rejection.',
            "Use http webhooks to connect to Zapier or any API.",
            "Send event notifications to Slack, Telegram and Discord."
        ],
        image: Step7
    }
]

const Features = () => {
    const theme = useTheme();
    const loginUrl = process.env.NEXT_PUBLIC_RELEASY_LOGIN_URL;

    const title = `Releasy features: user acceptance testing built for non technical clients`;
    const description =
        "Releasy simplifies project delivery by allowing your client to actively validate your releases. It's designed for tests that cannot be automated.";

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
                    content={`https://www.releasyapp.io/features`}
                    key="ogurl"
                />
                <link rel="canonical" href={`https://www.releasyapp.io/features`} />
            </Head>
            <Main>
                <Container>
                    <Box
                        padding={theme.spacing(0, 0, 12)}
                    >
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={theme.spacing(0.75)}
                        >
                            <Typography variant='h1' align='center'>Easy Delivery Project</Typography>
                            <Typography variant='body' align='center'>Releasy simplifies client collaboration and approvals for non-automated tests with time constraints.</Typography>
                        </Box>
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={theme.spacing(3)}
                            mt={theme.spacing(3.5)}
                            mx={'auto'}
                        >
                            {steps.map((p, i) => (
                                <Step
                                    title={p.title}
                                    subtitle={p.subtitle}
                                    list={p.list}
                                    image={p.image}
                                    index={i}
                                    key={i}
                                />
                            ))}
                        </Box>
                        <Box
                            display={'flex'}
                            justifyContent={'center'}
                            mt={theme.spacing(5.25)}
                        >
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
                </Container>
            </Main>
        </>
    )
}

export default Features;
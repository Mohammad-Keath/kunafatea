import { Stack, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function Introduction() {
  return (
    // <Container
    //   component={MotionViewport}
    //   sx={{
    //     // py: { xs: 10, md: 15 },
    //     // height: { md: '90vh' },
    //     alignContent: 'center',
    //   }}
    // >

    <Stack>
      <Typography variant="body1" px={20} py={10} textAlign="center">
        Over the past few years, our catering and delivery enterprises have experienced significant
        growth. In order to uphold our commitment to providing exceptional products and experiences
        that our loyal customer base has come to expect, we have developed our own proprietary
        delivery app. This app allows customers to connect directly with our restaurants and staff,
        streamlining the ordering and delivery process. Our app offers a range of features designed
        to enhance the customer experience, including real-time order tracking, personalized
        recommendations, and a variety of payment options. Additionally, we have implemented robust
        security measures to protect customer data and ensure a safe and secure ordering experience.
        We are confident that our delivery app will help us continue to deliver the high-quality
        products and experiences that our customers have come to expect.
      </Typography>
    </Stack>
    // </Container>
  );
}

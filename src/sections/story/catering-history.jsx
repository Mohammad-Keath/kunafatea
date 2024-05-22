import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function CateringHistory() {
  return (
    // <Container
    //   component={MotionViewport}
    //   sx={{
    //     // py: { xs: 10, md: 15 },
    //     // height: { md: '90vh' },
    //     alignContent: 'center',
    //   }}
    // >
    <Box
      display="grid"
      alignItems="center"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
      }}
      sx={{ height: 600 }}
    >
      <Image sx={{ width: 1, height: 1 }} src="" />
      <Stack>
        <Typography variant="body1" pt={5} px={5} color="secondary.main">
          Kunafatea Catering is a premier catering service that specializes in providing exceptional
          dining experiences for a variety of events, including beachside BBQs, corporate functions,
          grand weddings, and intimate gatherings. Our team of skilled chefs and event planners are
          dedicated to delivering the freshest and finest cuisine, tailored to your specific needs
          and preferences. We pride ourselves on our attention to detail, ensuring that every aspect
          of your event is executed flawlessly. From the initial consultation to the final cleanup,
          we are committed to providing you with a seamless and unforgettable catering experience.
          Whether you are hosting a casual get-together or a formal affair, Kunafatea Catering is
          the perfect choice for all your catering needs.
        </Typography>
        <Typography variant="body1" p={5}>
          Over the past few years, our catering and delivery enterprises have experienced
          significant growth. In order to uphold our commitment to providing exceptional products
          and experiences that our loyal customer base has come to expect, we have developed our own
          proprietary delivery app. This app allows customers to connect directly with our
          restaurants and staff, streamlining the ordering and delivery process. Our app offers a
          range of features designed to enhance the customer experience, including real-time order
          tracking, personalized recommendations, and a variety of payment options. Additionally, we
          have implemented robust security measures to protect customer data and ensure a safe and
          secure ordering experience. We are confident that our delivery app will help us continue
          to deliver the high-quality products and experiences that our customers have come to
          expect.
        </Typography>
      </Stack>
    </Box>
    // </Container>
  );
}

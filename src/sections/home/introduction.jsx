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
      <Typography variant="h3" pt={7} textAlign="center" color="secondary.main">
        WELCOME TO KUNAFA TEA
      </Typography>
      <Typography variant="h3" textAlign="center" color="secondary.main">
        AHLAN WA SAHLAN
      </Typography>
      <Typography variant="h5" px={20} pt={3} textAlign="center">
        We want to bring you a taste of Damascus, Syria, where we are from.
      </Typography>
      <Typography variant="h5" px={50} textAlign="center">
        Everything here tells a story, striped walls and straw chairs can be found in Damascene
        courtyard houses. Climbing plants and fragrant, white jasmine flowers cover the walls of the
        old streets of Damascus.
      </Typography>
      <Typography variant="h5" px={20} textAlign="center">
        We started preparing kunafa from our humblr home, and your love and support has brought us
        here.
      </Typography>
      <Typography variant="h5" px={20} pb={10} textAlign="center">
        We wish you a wonderful experience.
      </Typography>
    </Stack>
    // </Container>
  );
}

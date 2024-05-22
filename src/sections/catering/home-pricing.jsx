import { m } from 'framer-motion';
// import { keyframes } from '@emotion/react';
// import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';

// import { useResponsive } from 'src/hooks/use-responsive';

import { varFade, MotionViewport } from 'src/components/animate';

import EventForm from './event-form';

// ----------------------------------------------------------------------

export default function HomePricing() {
  const renderDescription = (
    <Stack spacing={3} sx={{ mb: 10, textAlign: 'center' }}>
      <m.div variants={varFade().inDown}>
        <Typography variant="h2" sx={{ mb: 1 }}>
          INQUIRY FORM
        </Typography>
        <Typography variant="subtitle1" color="secondary.main">
          Kindly share your catering preferences and any special requests, and rest assured, we are
          committed to crafting an unforgettable experience for you. Our dedicated team prioritizes
          meeting your unique needs, ensuring top-notch catering services of the highest quality.
          Whether it is a corporate affair, wedding celebration, milestone birthday, or any other
          occasion, count on us to surpass your expectations with seamless execution and exceptional
          attention to detail. Your satisfaction is our priority, so please feel free to share any
          additional ways we can elevate your event to extraordinary heights.
        </Typography>
      </m.div>
      <EventForm />
    </Stack>
  );

  return (
    <Stack
      direction="row"
      sx={{
        py: 15,
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
      }}
    >
      <Container component={MotionViewport}>{renderDescription}</Container>
    </Stack>
  );
}

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

export default function EventBooking() {
  const renderDescription = (
    <Stack spacing={3} sx={{ mb: 10, textAlign: 'center' }}>
      <m.div variants={varFade().inDown}>
        <Typography variant="subtitle1" color="primary.lighter">
          Online Reservation
        </Typography>
        <Typography variant="h2" sx={{ mt: 1 }}>
          EVENT BOOKING
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

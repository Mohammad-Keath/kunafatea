import { m } from 'framer-motion';
// import { keyframes } from '@emotion/react';
// import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';

// import { useResponsive } from 'src/hooks/use-responsive';

import { varFade, MotionViewport } from 'src/components/animate';

import ReservationForm from './reservation';

// ----------------------------------------------------------------------

export default function HomePricing() {
  // const mdUp = useResponsive('up', 'md');

  // const [currentTab, setCurrentTab] = useState('Standard');

  // const handleChangeTab = useCallback((event, newValue) => {
  //   setCurrentTab(newValue);
  // }, []);

  const renderDescription = (
    <Stack spacing={3} sx={{ mb: 10, textAlign: 'center' }}>
      {/* <m.div variants={varFade().inUp}>
        <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
          pricing plans
        </Typography>
      </m.div> */}

      <m.div variants={varFade().inDown}>
        <Typography variant="subtitle1" color="primary.lighter">
          Online Reservation
        </Typography>
        <Typography variant="h2" sx={{ mt: 1 }}>
          BOOK A TABLE
        </Typography>
      </m.div>
      <ReservationForm />

      {/* <m.div variants={varFade().inDown}>
        <Typography sx={{ color: 'text.secondary' }}>
          Choose the perfect plan for your needs. Always flexible to grow
        </Typography>
      </m.div> */}
    </Stack>
  );

//   const fadeIn = keyframes`
//   0% {
//     width: 50%;
//   }
//   100% {
//     width: 60%;
//   }
// `;

  return (
    <>
      {/* <Divider /> */}
      <Stack
        direction="row"
        sx={{
          // height: '100vh',
          py: 15,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
        }}
      >
        <Container component={MotionViewport}>{renderDescription}</Container>
      </Stack>
    </>
  );
}

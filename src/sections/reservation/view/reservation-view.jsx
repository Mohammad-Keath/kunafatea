import { useScroll } from 'framer-motion';

import Box from '@mui/material/Box';
// import { styled } from '@mui/material/styles';

import { useState } from 'react';

import { Stack, AppBar, Divider, Typography, useTheme } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../book-table';
import HomePricing from '../home-pricing';
import EventBooking from '../event-booking';

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();
  const mdUp = useResponsive('up', 'md');
  const [currTab, setCurrTab] = useState('booking');
  const theme = useTheme();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <Box
        sx={{
          //   overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <AppBar component="div" sx={{ position: 'sticky' }}>
          <Stack
            direction="row"
            height={60}
            alignItems="center"
            justifyContent="space-evenly"
            sx={{
              ...bgBlur({
                color: theme.palette.background.default,
              }),
            }}
          >
            <Box
              height={1}
              width={1}
              onClick={() => setCurrTab('booking')}
              sx={{ cursor: 'pointer', display: 'grid', placeContent: 'center' }}
            >
              <Typography color='secondary.main' variant="h6">BOOK A TABLE</Typography>
            </Box>
            <Divider
              flexItem
              orientation={mdUp ? 'vertical' : 'horizontal'}
              sx={{ borderStyle: 'dashed' }}
            />
            <Box
              height={1}
              width={1}
              onClick={() => setCurrTab('event')}
              sx={{ cursor: 'pointer', display: 'grid', placeContent: 'center' }}
            >
              <Typography color='secondary.main' variant="h6">EVENT BOOKING</Typography>
            </Box>
          </Stack>
        </AppBar>
        {currTab === 'booking' && <HomePricing />}
        {currTab === 'event' && <EventBooking />}
      </Box>
    </>
  );
}

import { useScroll } from 'framer-motion';

import Box from '@mui/material/Box';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../book-table';
import HomePricing from '../home-pricing';
import CateringHistory from '../catering-history';

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

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
        <CateringHistory />
        <HomePricing />
      </Box>
    </>
  );
}

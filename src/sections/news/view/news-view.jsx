import { useScroll } from 'framer-motion';

import Box from '@mui/material/Box';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../book-table';
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
      </Box>
    </>
  );
}

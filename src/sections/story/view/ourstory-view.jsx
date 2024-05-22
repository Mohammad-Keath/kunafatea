import { useScroll } from 'framer-motion';

import Box from '@mui/material/Box';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../book-table';
import CateringHistory from '../catering-history';
import CateringHistory2 from '../catering-history copy';
import Introduction from '../introduction';

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
        <Introduction />
        <CateringHistory />
        <CateringHistory2 />
      </Box>
    </>
  );
}

import { useScroll } from 'framer-motion';

import Box from '@mui/material/Box';
// import { styled } from '@mui/material/styles';

import NavHorizontal from 'src/layouts/dashboard/nav-horizontal';

import ScrollProgress from 'src/components/scroll-progress';

import Salad from '../salad';
import Sides from '../sides';
import Grills from '../grills';
import HotMezze from '../hot-mezze';
import PreOrder from '../pre-order';
import KidsMeal from '../kids-meal';
import HomeHero from '../home-hero';
import ColdMezze from '../cold-mezze';
import HotDrinks from '../hot-drinks';
import BugerWrap from '../burger&wraps';
import HomeCooked from '../home-cooked';
import ColdDrinks from '../cold-drinks';
import MiddleEasternSweets from '../middle-eastern-sweets';

// ----------------------------------------------------------------------

// const StyledPolygon = styled('div')(({ anchor = 'top', theme }) => ({
//   left: 0,
//   zIndex: 9,
//   height: 80,
//   width: '100%',
//   position: 'absolute',
//   clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
//   backgroundColor: theme.palette.background.default,
//   display: 'block',
//   lineHeight: 0,
//   ...(anchor === 'top' && {
//     top: -1,
//     transform: 'scale(-1, -1)',
//   }),
//   ...(anchor === 'bottom' && {
//     bottom: -1,
//     backgroundColor: theme.palette.grey[900],
//   }),
// }));

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <Box sx={{ position: 'relative' }}>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <HomeHero />
      {/* <Box sx={{ position: 'sticky' }}> */}
      <NavHorizontal />
      {/* </Box> */}
      {/* <MenuNav/> */}

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
          // backgroundImage: `url(${BackgroundImg})`,
          // backgroundSize: 'cover',
        }}
      >
        {/* <HomeMinimal /> */}
        <ColdMezze />
        <Box
          id="hotMezze"
          sx={{
            overflow: 'hidden',
            position: 'relative',
            bgcolor: '#1B1E20',
          }}
        >
          <HotMezze />
        </Box>
        <Salad />
        <Box
          sx={{
            overflow: 'hidden',
            position: 'relative',
            bgcolor: '#1B1E20',
          }}
        >
          <BugerWrap />
        </Box>
        <Grills />
        <Box
          sx={{
            overflow: 'hidden',
            position: 'relative',
            bgcolor: '#1B1E20',
          }}
        >
          <HomeCooked />
        </Box>
        <PreOrder />
        <Box
          sx={{
            overflow: 'hidden',
            position: 'relative',
            bgcolor: '#1B1E20',
          }}
        >
          <Sides />
        </Box>
        <KidsMeal />
        <Box
          sx={{
            overflow: 'hidden',
            position: 'relative',
            bgcolor: '#1B1E20',
          }}
        >
          <MiddleEasternSweets />
        </Box>
        <ColdDrinks />
        <Box
          sx={{
            overflow: 'hidden',
            position: 'relative',
            bgcolor: '#1B1E20',
          }}
        >
          <HotDrinks />
        </Box>
      </Box>
    </Box>
  );
}

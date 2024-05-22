import { useScroll } from 'framer-motion';

import Box from '@mui/material/Box';
// import { styled } from '@mui/material/styles';

import { useSearchParams } from 'src/routes/hooks';

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

  const searchParams = useSearchParams();
  const query = searchParams.get('select');
  const appetizers = query === 'appetizers';
  const desserts = query === 'desserts';
  const dishes = query === 'dishes';
  const drinks = query === 'drinks';

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
        {(appetizers || !query) && (
          <div id="coldMezze">
            <ColdMezze id="coldMezze" />
          </div>
        )}
        {(appetizers || !query) && (
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
        )}
        {(appetizers || !query) && (
          <div id="salad">
            <Salad />
          </div>
        )}
        {(dishes || !query) && (
          <Box
            sx={{
              overflow: 'hidden',
              position: 'relative',
              bgcolor: '#1B1E20',
            }}
            id="burgers"
          >
            <BugerWrap />
          </Box>
        )}
        {(dishes || !query) && (
          <div id="grills">
            <Grills />
          </div>
        )}
        {(dishes || !query) && (
          <Box
            sx={{
              overflow: 'hidden',
              position: 'relative',
              bgcolor: '#1B1E20',
            }}
            id="homecooked"
          >
            <HomeCooked />
          </Box>
        )}
        {(dishes || !query) && (
          <div id="preorder">
            <PreOrder />
          </div>
        )}
        {(appetizers || !query) && (
          <Box
            sx={{
              overflow: 'hidden',
              position: 'relative',
              bgcolor: '#1B1E20',
            }}
            id="sides"
          >
            <Sides />
          </Box>
        )}
        {dishes && (
          <Box
            sx={{
              overflow: 'hidden',
              position: 'relative',
              bgcolor: '#1B1E20',
            }}
            id="kids"
          >
            <KidsMeal />
          </Box>
        )}
        {!query && (
          <div id="kids">
            <KidsMeal />
          </div>
        )}
        {(desserts || !query) && (
          <Box
            sx={{
              overflow: 'hidden',
              position: 'relative',
              bgcolor: '#1B1E20',
            }}
            id="sweets"
          >
            <MiddleEasternSweets />
          </Box>
        )}
        {(drinks || !query) && (
          <div id="coldDrinks">
            <ColdDrinks />
          </div>
        )}
        {(drinks || !query) && (
          <Box
            sx={{
              overflow: 'hidden',
              position: 'relative',
              bgcolor: '#1B1E20',
            }}
            id="hotDrinks"
          >
            <HotDrinks />
          </Box>
        )}
      </Box>
    </Box>
  );
}

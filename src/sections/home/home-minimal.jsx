import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Stack, Divider } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Dishes from 'src/assets/images/dishes.jpeg';
import Drinks from 'src/assets/images/drinks.jpeg';
import Desserts from 'src/assets/images/dessert.jpeg';
import Appetizer from 'src/assets/images/appetizers.jpeg';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    img: Appetizer,
    title: 'Appetizers menu',

    description: 'Consistent design makes it easy to brand your own.',
  },
  {
    img: Desserts,
    title: 'Desserts menu',
    description: 'Consistent design makes it easy to brand your own.',
  },
  {
    img: Dishes,
    title: 'Dishes menu',
    description: 'Consistent design makes it easy to brand your own.',
  },
  {
    img: Drinks,
    title: 'Drinks menu',
    description: 'Easy to customize and extend, saving you time and money.',
  },
];

// ----------------------------------------------------------------------

export default function HomeMinimal() {
  return (
    <>
      {/* <Divider /> */}
      <Container
        component={MotionViewport}
        sx={{
          py: { xs: 10, md: 0 },
          height: { md: '90vh' },
          alignContent: 'center',
        }}
      >
        {/* <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 15 },
          }}
        >
          <m.div variants={varFade().inUp}>
          <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
            Kunafatea
          </Typography>
        </m.div>

          <m.div variants={varFade().inDown}>
            <Typography variant="h2">MENU</Typography>
          </m.div>
        </Stack> */}
        <Box
          gap={{ xs: 3, lg: 2 }}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
        >
          {CARDS.map((card, index) => (
            <m.div variants={varFade().inUp} key={index}>
              <Card
                sx={{
                  textAlign: 'center',
                  boxShadow: { md: 'none' },
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${card.img})`,
                  backgroundSize: '100%',
                  borderRadius: 0,
                  cursor: 'pointer',
                  p: (theme) => theme.spacing(10, 5),
                  ...(index % 2 !== 1 && {
                    mt: { md: 15 },
                  }),
                  '&:hover': {
                    backgroundSize: '150%',
                    transition: 'all 2s ease',
                  },
                }}
              >
                {/* <Box sx={{ height: 60 }} /> */}

                <Typography
                  textTransform="uppercase"
                  variant="h5"
                  sx={{ mt: 20, mb: 2, color: '#B39870' }}
                >
                  {card.title}
                </Typography>

                <Typography>{card.description}</Typography>
              </Card>
            </m.div>
          ))}
        </Box>
      </Container>
    </>
  );
}

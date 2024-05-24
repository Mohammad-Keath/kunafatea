import { Box, Stack, Typography } from '@mui/material';

import SeaBass from 'src/assets/images/menu/grills/grilled sea bass.jpg';
import HalabMix from 'src/assets/images/menu/grills/halab mix grill.jpg';
import LevantMix from 'src/assets/images/menu/grills/levant mix grill.jpg';
import LambSteak from 'src/assets/images/menu/grills/grilled lamb steak.jpg';
import GrilledChickenSteak from 'src/assets/images/menu/grills/grilled chicken steak (2).jpg';

import Image from 'src/components/image';

export default function Grills() {
  const data = [
    {
      photo: '',
      title: 'KABAB',
      price: '13.50',
      description:
        'Charcoal griled kabab flavoured with chili and sumac, served with a sumac, onion, and parsley salad and a side of your choice.(2 skewers)',
    },
    {
      photo: '',
      title: 'LAMB CHOPS',
      price: '15.50',
      description: 'Charcoal griled marinated lamb chops with a side of your choice.(5 pieces)',
    },
    {
      photo: '',
      title: 'LAMB CUBES',
      price: '15.00',
      description: 'Charcoal grilled marinated lamb cubes with a side of your choice.(1 skewer) ',
    },
    {
      photo: '',
      title: 'SHISH TAWOUK',
      price: '12.95',
      description: 'Charcoal grilled marinated chicken cubes with a side of your choice.(1 skewer)',
    },
    {
      photo: '',
      title: 'CHICKEN WINGS',
      price: '9.95',
      description:
        'Charcoal grilled chicken wings, marinated ni a zesty sauce with a side of your choice.( 6 pieces ) ',
    },
    {
      photo: HalabMix,
      title: 'HALAB MIX GRILL',
      price: '18.95',
      description:
        'Grill platter with 2 skewers of your choice of the following: Adana Kabab, lamb cubes, Shish Tawouk, chicken wings, or 3 lamb chops, served with a side of your choice.( for 1 )',
    },
    {
      photo: LevantMix,
      title: 'LEVANT MIX GRILL',
      price: '36.50',
      description:
        'Sharing grill platter with 2 skewers of Adana Kabab, 1skewer of lamb cubes, 1skewer of Shish Tawouk, 2 lamb chops and 2 chicken wings, served with two sides of your choice( for 2)',
    },
    {
      photo: SeaBass,
      title: 'GRILLED SEA BASS',
      price: '15.95',
      description:
        'Charcoal grilled fresh Sea Bass, marinated in an olive oil, garlic and lemon sauce, served with a side of your choice.',
    },
    {
      photo: LambSteak,
      title: 'GRILLED LAMB STEAK',
      price: '19.95',
      description:
        'Tender grilled steak served with sauteed vegetables, mushroom sauce and side of your choice',
    },
    {
      photo: GrilledChickenSteak,
      title: 'GRILLED CHICKEN STEAK',
      price: '15.45',
      description:
        'Charcoal grilled marinated chicken breast served with sauteed vegetables, mushroom sauce and side of your choice',
    },
    {
      photo: '',
      title: 'BBQ RIBS',
      price: '15.50',
      description:
        'Succulent lamb ribs marinated in spices and glazed in a Texan barbeque sauce served with sauteed vegetables and side of your choice (5 pieces)',
    },
  ];
  return (
    <Stack>
      <Stack direction="row" justifyContent="center">
        <Typography textAlign="center" variant="h2" borderBottom="2px solid #B39870" my={10}>
          GRILLS
        </Typography>
      </Stack>
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={7}
        rowGap={4}
        sx={{
          px: { md: 15, xs: 3 },
          pb: 4,
        }}
      >
        {data.map((one, index) => (
          // <Card sx={{ backgroundColor: 'background.default' }}>
          <Stack direction="column" key={index} sx={{ height: 380 }}>
            <Image sx={{ height: 200 }} src={one.photo} />
            <Typography sx={{ mt: 1.5, mx: 2, color: 'secondary.main' }} variant="h6">
              {one.title}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Typography sx={{ mx: 2 }} variant="body2">
              {one.description}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Typography
              sx={{ color: 'primary.lighter', mx: 2, mb: 2 }}
              variant="subtitle1"
              textAlign="end"
            >
              £{one.price}
            </Typography>
          </Stack>
          // </Card>
        ))}
      </Box>
    </Stack>
  );
}

import { Box, Stack, Typography } from '@mui/material';

import Hallum from 'src/assets/images/menu/hotMezze/hallum.jpg';
import Kibbeh from 'src/assets/images/menu/hotMezze/kibbeh.jpg';
import Falafel from 'src/assets/images/menu/hotMezze/falafel.jpg';
import Mixed from 'src/assets/images/menu/hotMezze/mixed hot.jpg';
import LentilSoup from 'src/assets/images/menu/hotMezze/lentil soup.jpg';
import BatataHarra from 'src/assets/images/menu/hotMezze/batata harra.jpg';
import ChickenRolls from 'src/assets/images/menu/hotMezze/chicken rolls.jpg';
import CheeseRolls from 'src/assets/images/menu/hotMezze/cheese rolls (2).jpg';
import GrilledKibbeh from 'src/assets/images/menu/hotMezze/grilled kibbeh.jpg';
import VegeterianKibbeh from 'src/assets/images/menu/hotMezze/vegetarian kibbeh.jpg';

import Image from 'src/components/image';

export default function HotMezze() {
  const data = [
    {
      photo: CheeseRolls,
      title: 'CHEESE ROLLS',
      price: '5.50',
      description: 'Crispy filo pastry rolls filled with cheese. (3 pieces)',
      type: 'Vegetarian',
    },
    {
      photo: ChickenRolls,
      title: 'CHICKEN ROLLS',
      price: '5.50',
      description:
        'Crispy filo pastry rolls filled with minced chicken , sweet corn and mushroom (3 pieces)',
      //   type: 'Vegan',
    },
    {
      photo: Falafel,
      title: 'FALAFEL',
      price: '5.50',
      description:
        'Deep-fried balls of ground chickpeas & fresh herbs, served with tahini sauce (4 pieces)',
      type: 'Vegetarian',
    },
    {
      photo: Kibbeh,
      title: 'MEAT FRIED KIBBEH',
      price: '6.00',
      description:
        'Deep-fried meat and bulgur balls, stuffed with minced meat, onions, and walnuts.(3 pieces)',
      //   type: 'Vegetarian',
    },
    {
      photo: GrilledKibbeh,
      title: 'GRILLED KIBBEH',
      price: '6.50',
      description:
        'Griled meat and bulgur balls, stuffed with minced meat, onions, red pepper paste and walnuts.(2 pieces)',
      //   type: 'Vegetarian',
    },
    {
      photo: VegeterianKibbeh,
      title: 'VEGETARIAN FRIED KIBBEH',
      price: '5.75',
      description: 'Deep fried bulgur balls, stuffed with mushrooms, sweetcorn and spinach.',
      type: 'Vegan',
    },
    {
      photo: Hallum,
      title: 'FRIED HALLOUMI',
      price: '6.00',
      description: '(4 pieces)',
      type: 'Vegetarian',
    },
    {
      photo: BatataHarra,
      title: 'BATATA HARRA',
      price: '4.95',
      description: 'Spicy Potatoes with coriander, garlic and crushed red pepper.',
      type: 'Vegan',
    },
    {
      photo: '',
      title: 'AUBERGINE MOSAKKAA',
      price: '6.00',
      description: 'Fried aubergine slices with a rich tomato and onion sauce.',
      type: 'Vegan',
    },
    {
      photo: LentilSoup,
      title: 'LENTIL SOUP',
      price: '3.25',
      description: 'Served with crispy fried Syrian fresh bread and lemon slices.',
      type: 'Vegan',
    },
    {
      photo: Mixed,
      title: 'HOT MEZZE MIXED PLATTER',
      price: '13.99',
      description:
        'Assorted selection of 4 hot starters, Falafel, fried halloumi, cheese rolls and batata harra',
      type: 'Vegetarian',
    },
  ];
  return (
    <Stack>
      <Stack direction="row" justifyContent="center">
        <Typography textAlign="center" variant="h2" borderBottom="2px solid #B39870" my={10}>
          HOT MEZZE
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

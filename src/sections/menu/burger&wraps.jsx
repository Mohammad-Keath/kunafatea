import { Box, Stack, Typography } from '@mui/material';

import TurkBurger from 'src/assets/images/menu/burger/turk_burger.jpg';
import NachoBurger from 'src/assets/images/menu/burger/nacho burger.jpg';
import ShaamBurger from 'src/assets/images/menu/burger/shaam_burger.jpg';
import ShamiFalafel from 'src/assets/images/menu/burger/shami falafel.jpg';
import DamasShawerma from 'src/assets/images/menu/burger/damas shawerma.jpg';

import Image from 'src/components/image';

export default function BugerWrap() {
  const data = [
    {
      photo: TurkBurger,
      title: 'TURK BURGER',
      price: '10.45',
      description:
        'Lamb kabab burger in Turkish spices, served over a chilli garlic sauce, topped with melted cheese and caramelised onions in a brioche bun. Served with a side of fries.',
    },
    {
      photo: ShaamBurger,
      title: 'SHAAM BURGER',
      price: '10.45',
      description:
        'Lamb kabab burger in Damascene spices, served over a pickle-mayo dressing, topped with melted cheese, tomato and lettuce in a brioche bun. Served with a side of fries.',
    },
    {
      photo: NachoBurger,
      title: 'NACHO BURGER',
      price: '9.95',
      description:
        'Crispy fried chicken breast served over a pickle-mayo dressing, topped with lettuce, melted cheese and spicy nachos in a brioche bun. Served with a side of fries.',
    },
    {
      photo: '',
      title: 'GRILLED CHICKEN BURGER',
      price: '9.95',
      description:
        'Grilled chicken breast served over a chilli garlic sauce topped with lettuce, tomato and melted cheese in a brioche bun. Served with a side of fries',
    },
    {
      photo: '',
      title: 'HALLOUMI BURGER',
      price: '8.95',
      description:
        'Crispy fried Haloumi served over a pickle-mayo dressing, with fried mushrooms, lettuce, tomato and parsley in a brioche bun. Served with a side of fries.',
      type: 'Vegetarian',
    },
    {
      photo: DamasShawerma,
      title: 'DAMAS SHAWARMA WRAP',
      price: '10.95',
      description:
        'Tender chicken pieces in a rich garlic sauce, with thinly sliced pickled cucumbers, wrapped in Syrian fresh bread. Served with a side of fries.',
    },
    {
      photo: '',
      title: 'KABAB WRAP',
      price: '11.95',
      description:
        'Chargrilled Kabab minced lamb wrap with onions, parsley and tomato, in a creamy garlic sauce, wrapped in fresh Syrian fresh bread. Served with a side of fries.',
    },
    {
      photo: ShamiFalafel,
      title: 'SHAMI FALAFEL WRAP',
      price: '8.95',
      description:
        'Falafel pieces wrap with a rich tahini sauce and a lettuce, tomato, mint and lemon salad, wrapped in fresh Syrian fresh bread. Served with a side of fries.',
      type: 'Vegetarian',
    },
    {
      photo: '',
      title: 'HALLOUMI WRAP',
      price: '8.95',
      description:
        'Fried Halloumi with tomato, lettuce and olives, in a creamy sauce, wrapped in fresh Syrian fresh bread.',
      type: 'Vegetarian',
    },
  ];
  return (
    <Stack >
      <Stack direction="row" justifyContent="center">
        <Typography textAlign="center" variant="h2" borderBottom="2px solid #B39870" my={10}>
          BURGERS & WRAPS
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

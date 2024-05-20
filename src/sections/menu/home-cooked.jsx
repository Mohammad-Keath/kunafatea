import { Box, Stack, Typography } from '@mui/material';

import Karniyarik from 'src/assets/images/menu/homeCooked/karniyarik.jpg';
import LambFakhara from 'src/assets/images/menu/homeCooked/lamb fakhara.jpg';
import JediBelZeit from 'src/assets/images/menu/homeCooked/jedi bel zeit.jpg';
import CreamyChicken from 'src/assets/images/menu/homeCooked/creamy chicken.jpg';
import AubergineFatteh from 'src/assets/images/menu/homeCooked/aubergine fatteh.jpg';

import Image from 'src/components/image';

export default function HomeCooked() {
  const data = [
    {
      photo: JediBelZeit,
      title: 'JEDI BEL ZEIT',
      price: '17.95',
      description:
        'Tender lamb shank cooked in olive oil, with vegetables in a heartwarming broth with hints of lemon and garlic, served with vermicelli rice.',
    },
    {
      photo: '',
      title: 'CHICKEN MANDI',
      price: '12.45',
      description:
        'Yemeni style smoked rice, served with two chicken drumsticks and a spicy tomato sauce.',
    },
    {
      photo: CreamyChicken,
      title: 'CREAMY CHICKEN',
      price: '12.45',
      description:
        'Chicken breast in a creamy sauce and sauteed mushrooms, served with vermicelli rice.',
    },
    {
      photo: LambFakhara,
      title: 'LAMB FAKHARA',
      price: '15.00',
      description:
        'Tender Lamb pieces with aubergines and peppers in a rich tomato sauce, cooked in a clay Pot and served with vermicelli rice',
    },
    {
      photo: Karniyarik,
      title: 'KARNIYARIK',
      price: '12.45',
      description:
        'Eggplant stuffed with a mix of onions, minced meat and tomato sauce, topped with melted cheese, served with vermicelli rice',
    },
    {
      photo: '',
      title: 'SHAWARMA FATTEH',
      price: '9.95',
      description:
        'Juicy chicken shawarma, over a bed of crispy fried fresh bread, coated in a creamy yoghurt sauce, topped with pickled cucumbers, pomegranate seeds and parsley.',
    },
    {
      photo: AubergineFatteh,
      title: 'AUBERGINE FATTEH',
      price: '10.50',
      description:
        'Fried aubergine cubes and minced meat, over a bed of crispy fried fresh bread, coated in a yoghurt and tahini sauce, topped with pomegranate seeds and parsley. ',
    },
  ];
  return (
    <Stack>
      <Stack direction="row" justifyContent="center">
        <Typography textAlign="center" variant="h2" borderBottom="2px solid #B39870" my={10}>
          HOMECOOKED DISHES
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

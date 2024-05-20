import { Box, Stack, Typography } from '@mui/material';

import Fattoush from 'src/assets/images/menu/salad/fattoush.jpg';
import Ceaser from 'src/assets/images/menu/salad/ceaser salad.jpg';
import Tabbouleh from 'src/assets/images/menu/salad/tabbouleh.jpg';
import ZaytounSalad from 'src/assets/images/menu/salad/zaytoun salad.jpg';

import Image from 'src/components/image';

export default function Salad() {
  const data = [
    {
      photo: Fattoush,
      title: 'FATTOUSH',
      price: '6.50',
      description:
        'Tomato, lettuce, and cucumber salad in a sumac lemon dressing, topped with fried pieces of fresh bread and drizzled with pomegranate molasses',
      type: 'Vegetarian',
    },
    {
      photo: Tabbouleh,
      title: 'TABBOULEH',
      price: '7.00',
      description: 'Parsley, tomato, and bulgur salad in a tangy lemon and olive oil dressing.',
      type: 'Vegetarian',
    },
    {
      photo: ZaytounSalad,
      title: 'ZAYTOUN SALAD',
      price: '4.95',
      description:
        'Olive and feta cheese salad in a tangy lemon dressing topped with crushed walnuts and drizzled with pomegranate molasses.',
      type: 'Vegetarian',
    },
    {
      photo: Ceaser,
      title: 'CAESAR SALAD',
      price: '8.45',
      description:
        'Lettuce and grilled chicken pieces salad topped with mayo sauce, crushed nacho and shredded cheese.',
      //   type: 'Vegetarian',
    },
  ];
  return (
    <Stack>
      <Stack direction="row" justifyContent="center">
        <Typography textAlign="center" variant="h2" borderBottom="2px solid #B39870" my={10}>
          SALAD
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

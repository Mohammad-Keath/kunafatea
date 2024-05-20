import { Box, Stack, Typography } from '@mui/material';

import KiwiLime from 'src/assets/images/menu/cold-drinks/kiwi&lime.jpg';
import Arabccino from 'src/assets/images/menu/cold-drinks/arabccino.jpg';
import MongoLassi from 'src/assets/images/menu/cold-drinks/mogoLassi.jpg';
import LemonAndMint from 'src/assets/images/menu/cold-drinks/lemon and mint.jpg';
import StarawberryMojito from 'src/assets/images/menu/cold-drinks/strawberry mojito.jpg';

import Image from 'src/components/image';

export default function ColdDrinks() {
  const data = [
    {
      photo: LemonAndMint,
      title: 'LEMON AND MINT',
      sizes: [
        { name: 'cup', price: '4.95' },
        { name: 'jug', price: '12.95' },
      ],
    },
    {
      photo: '',
      title: 'ROSE LEMONADE',
      sizes: [{ name: 'cup', price: '4.95' }],
    },
    {
      photo: StarawberryMojito,
      title: 'STRAWBERRY MOJITO',
      sizes: [{ name: 'cup', price: '5.95' }],
    },
    {
      photo: KiwiLime,
      title: 'KIWI & LIME MOJITO',
      sizes: [{ name: 'cup', price: '4.50' }],
    },
    {
      photo: MongoLassi,
      title: 'MANGO LASSI',
      sizes: [
        { name: 'cup', price: '4.95' },
        { name: 'jug', price: '12.95' },
      ],
    },
    {
      photo: '',
      title: 'PINEAPPLE & RASPBERRY SMOOTHIE',
      sizes: [{ name: 'cup', price: '7.50' }],
    },
    {
      photo: '',
      title: 'AVOCADO SMOOTHIE',
      sizes: [{ name: 'cup', price: '5.95' }],
    },
    {
      photo: '',
      title: 'LOTUS BISCOFF SHAKE',
      sizes: [{ name: 'cup', price: '6.50' }],
    },
    {
      photo: Arabccino,
      title: 'ARABCCINO',
      sizes: [{ name: 'cup', price: '5.95' }],
    },
    {
      photo: '',
      title: 'SOFT DRINK',
      description: '( Coca Cola, Sprite, Fanta , J2O , Rubicon mango) ',
      sizes: [{ name: 'cup', price: '2.50' }],
    },
    {
      photo: '',
      title: 'KIDS DRINK',
      description: '(Fruit Shoot)',
      sizes: [{ name: 'cup', price: '2.00' }],
    },
  ];
  return (
    <Stack>
      <Stack direction="row" justifyContent="center">
        <Typography textAlign="center" variant="h2" borderBottom="2px solid #B39870" my={10}>
          COLD DRINKS
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
          <Stack direction="column" key={index} sx={{ height: 300 }}>
            <Image sx={{ height: 200, size: 'cover' }} src={one.photo} />
            <Typography sx={{ mt: 1.5, mx: 2, color: 'secondary.main' }} variant="h6">
              {one.title}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Typography sx={{ mx: 2 }} variant="body2">
              {one.description}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            {one.price && (
              <Typography
                sx={{ color: 'primary.lighter', mx: 2, mb: 2 }}
                variant="subtitle1"
                textAlign="end"
              >
                £{one.price}
              </Typography>
            )}
            {one.sizes && (
              <Stack direction="row" justifyContent="flex-end" gap={1.5} sx={{ mx: 2, mb: 2 }}>
                {one.sizes.map((size, idx) => (
                  <Typography
                    key={idx}
                    sx={{ color: 'primary.lighter' }}
                    variant="subtitle1"
                    textAlign="end"
                  >
                    <span style={{ color: '#B39870',textTransform:'capitalize' }}>{size.name}:</span> £{size.price}
                  </Typography>
                ))}
              </Stack>
            )}
          </Stack>
          // </Card>
        ))}
      </Box>
    </Stack>
  );
}

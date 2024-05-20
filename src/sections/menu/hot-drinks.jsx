import { Box, Stack, Typography } from '@mui/material';

import ArabicTea from 'src/assets/images/menu/hot-drinks/arabic tea.jpg';

import Image from 'src/components/image';

export default function HotDrinks() {
  const data = [
    {
      photo: ArabicTea,
      title: 'ARABIC TEA',
      description:
        'Aromatic black tea leaves infused with cardamom and cinnamon,served medium-sweet.',
      sizes: [
        { name: 'cup', price: '3.00' },
        { name: 'pot', price: '5.95' },
      ],
    },
    {
      photo: '',
      title: 'MOROCCAN TEA',
      description: 'Fragrant green tea leaves infused whti fresh mint, served medium-sweet',
      sizes: [
        { name: 'cup', price: '3.25' },
        { name: 'pot', price: '6.50' },
      ],
    },
    {
      photo: '',
      title: 'ADANI KARAK TEA',
      description: 'Black tea leaves with milk, infused with Arabic spices, served medium-sweet.',
      sizes: [
        { name: 'cup', price: '3.25' },
        { name: 'pot', price: '6.50' },
      ],
    },
    {
      photo: '',
      title: 'ENGLISH TEA',
      sizes: [
        { name: 'cup', price: '3.00' },
        { name: 'pot', price: '5.95' },
      ],
    },
    {
      photo: '',
      title: 'TURKISH COFFEE',
      sizes: [
        { name: 'cup', price: '3.00' },
        { name: 'pot', price: '5.95' },
      ],
    },
    {
      photo: '',
      title: 'PISTACHIO COFEE',
      description:
        'Turkish Menengiç caffeine-free coffee made with ground roasted pistachio tree seeds, served medium-sweet. ',
      sizes: [
        { name: 'cup', price: '3.50' },
        { name: 'pot', price: '6.50' },
      ],
    },
  ];
  return (
    <Stack>
      <Stack direction="row" justifyContent="center">
        <Typography textAlign="center" variant="h2" borderBottom="2px solid #B39870" my={10}>
          HOT DRINKS
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
          <Stack direction="column" key={index} sx={{ height: 330 }}>
            <Image sx={{ height: 200 }} src={one.photo} />
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

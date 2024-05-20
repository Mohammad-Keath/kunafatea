import { Box, Stack, Typography } from '@mui/material';

import Image from 'src/components/image';

export default function KidsMeal() {
  const data = [
    {
      photo: '',
      title: 'CHICKEN FILLET MEAL',
      price: '7.50',
      description: 'Served with fries and a kids drink.( 3 pieces)',
    },
    {
      photo: '',
      title: 'KABAB MEAL',
      price: '7.50',
      description: 'charcoal grilled kabab served with fries and a kids drink (1 skewer)',
    },
    {
      photo: '',
      title: 'SHISH TAWOUK MEAL',
      price: '7.50',
      description:
        'Charcoal grilled marinated chicken cubes, served with fries and a kids drink( 4 pieces ) ',
    },
  ];
  return (
    <Stack>
      <Stack direction="row" justifyContent="center">
        <Typography textAlign="center" variant="h2" borderBottom="2px solid #B39870" my={10}>
          KIDS MEAL
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

import { Box, Stack, Typography } from '@mui/material';

import Image from 'src/components/image';

export default function PreOrder() {
  const data = [
    {
      photo: '',
      title: 'LAMB SHOULDER MANDI',
      price: '75.00',
      description:
        'Tender Lamb Shoulder served our signature smoked Mandi rice and a spicy tomato and onion sauce( 5 people)',
    },
    {
      photo: '',
      title: 'LAMB FAKHARA',
      price: '50.00',
      description:
        'Tender Lamb pieces with aubergines and peppers in a rich tomato sauce, cooked in a clay Pot and served with vermicelli rice. (4 people)',
    },
    {
      photo: '',
      title: 'KATAYEF ASAFEERI',
      price: '25.00',
      description:
        'Arab-style mini pancakes with a creamy filling served with sugar Arab-style mini pancakes with a creamy filling served with sugar syrup (25 pieces)',
    },
  ];
  return (
    <Stack>
      <Stack direction="row" justifyContent="center">
        <Typography textAlign="center" variant="h2" borderBottom="2px solid #B39870" my={10}>
          PREORDER ONLY
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

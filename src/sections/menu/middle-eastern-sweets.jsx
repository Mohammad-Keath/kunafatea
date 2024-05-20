import { Box, Stack, Typography } from '@mui/material';

import Hreeseh from 'src/assets/images/menu/sweets/hreeseh.jpg';
import BouzaArabi from 'src/assets/images/menu/sweets/bouza arabi.jpg';
import IceCream from 'src/assets/images/menu/sweets/ice cream mini.jpg';
import BaklawaSlice from 'src/assets/images/menu/sweets/baklawa slice.jpg';
import CrispyKunafa from 'src/assets/images/menu/sweets/crispy kunafa.jpg';
import CreamyBaklawa from 'src/assets/images/menu/sweets/creamy baklawa.jpg';
import KunafateaSpec from 'src/assets/images/menu/sweets/kunafatea spec.jpg';
import CreamyKunafa from 'src/assets/images/menu/sweets/creamy kunafa mini.jpg';
import OriginalKunafa from 'src/assets/images/menu/sweets/original kunafa mini.jpg';

import Image from 'src/components/image';

export default function MiddleEasternSweets() {
  const data = [
    {
      photo: OriginalKunafa,
      title: 'ORIGINAL KUNAFA',
      sizes: [
        { inches: 'mini', price: '5.95' },
        { inches: '7"', price: '13.50' },
        { inches: '10"', price: '18.95' },
      ],
      description: 'Kunafa with a melty cheese filling, topped with crushed pistachios.',
    },
    {
      photo: CreamyKunafa,
      title: 'CREAMY KUNAFA',
      sizes: [
        { inches: 'mini', price: '5.95' },
        { inches: '7"', price: '13.50' },
        { inches: '10"', price: '18.95' },
      ],
      description:
        'Kunafa with a creamy, soft cheese filling, drizzled with milk and white chocolate.( or soft cheese filing )',
    },
    {
      photo: CrispyKunafa,
      title: 'CRISPY KUNAFA',
      price: '13.50',
      description: 'crispy kunafa with your choice of filling. Melty cheese filling',
    },
    {
      photo: IceCream,
      title: 'ICE CREAM MINI',
      price: '6.45',
      description: 'Mini kunafa with a rich ice cream filling drizzled with milk chocolate.',
    },
    {
      photo: '',
      title: 'MINI KUNAFA BOX',
      price: '26.95',
      description:
        'Assorted selection of 6 Mini Kunafas: 3 Original topped with crushed pistachios and 3 Creamy topped with milk chocolate, white chocolate and Lotus Biscof sauce.( 6 pieces, takeaway only )',
    },
    {
      photo: BaklawaSlice,
      title: 'BAKLAWA SLICE',
      price: '5.00',
      description:
        'Triangular Bakalwa slice made with crispy filo pastry, filled with chopped pistachios, and soaked in a sugar syrup.',
    },
    {
      photo: CreamyBaklawa,
      title: 'CREAMY BAKLAWA',
      price: '7.95',
      description:
        'A round 5,, Baklawa tray, made with crispy filo pastry, filled with cream and soaked in a sugar syrup. Baked fresh to order.',
    },
    {
      photo: KunafateaSpec,
      title: 'KUNAFATEA SPECIAL',
      price: '8.50',
      description: 'candy floss filled with Arabic ice cream',
    },
    {
      photo: BouzaArabi,
      title: 'BOUZA ARABI',
      price: '8.50',
      description: 'Rich, creamy Arabic ice cream with crushed pistachios.( 2 slices )',
    },
    {
      photo: Hreeseh,
      title: 'HREESEH',
      price: '5.50',
      description:
        'Basbousa semolina cake soaked in a sugar syrup and topped with crushed pistachios.(2 slices) ',
    },
  ];
  return (
    <Stack>
      <Stack direction="row" justifyContent="center">
        <Typography textAlign="center" variant="h2" borderBottom="2px solid #B39870" my={10}>
          MIDDLE EASTERN SWEETS
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
                    <span style={{ color: '#B39870' }}>{size.inches}:</span> £{size.price}
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

import { Box, Stack, Typography } from '@mui/material';

import Mixed from 'src/assets/images/menu/coldMezze/mixed.jpg';
import Hummus from 'src/assets/images/menu/coldMezze/hummus.jpg';
import Yalanji from 'src/assets/images/menu/coldMezze/yalanji.jpg';
import Motabbal from 'src/assets/images/menu/coldMezze/motabbal.jpg';
import Mohammarah from 'src/assets/images/menu/coldMezze/mohammara.jpg';
import BabaGhanouj from 'src/assets/images/menu/coldMezze/baba ghanouj.jpg';

import Image from 'src/components/image';

export default function ColdMezze() {
  const data = [
    {
      photo: Hummus,
      title: 'HUMMUS',
      price: '5.50',
      description:
        'Mashed chickpea and tahini dip, drizzled with olive oil, served with Syrian fresh bread.',
      type: 'Vegan',
    },
    {
      photo: Mohammarah,
      title: 'MOHAMMARA',
      price: '5.95',
      description:
        'Spicy dip made with roasted red chilli peppers, almonds, pomegranaet moalses, drizzled with olive oil, served with Syrian fresh bread.',
      type: 'Vegan',
    },
    {
      photo: BabaGhanouj,
      title: 'BABA GHANOUJ',
      price: '5.95',
      description:
        'Roasted eggplant dip, with chopped walnuts, peppers and onion, drizzled with olive oil and pomegranate molasses, served with Syrian fresh bread.',
      type: 'Vegetarian',
    },
    {
      photo: Motabbal,
      title: 'MOTABBAL',
      price: '4.95',
      description:
        'Smokey aubergine, yoghurt and tahini dip, topped with pomegranate seeds, drizzled with olive oil, served with Syrian fresh bread.',
      type: 'Vegetarian',
    },
    {
      photo: Yalanji,
      title: 'YALANJI',
      price: '5.50',
      description: 'Sour vnie leaves stuffed with rice in lemon, pomegranate molasses sauce',
      type: 'Vegetarian',
    },
    {
      photo: Mixed,
      title: 'COLD MEZZE MIXED PLATTER',
      price: '13.95',
      description:
        'Assorted selection of 4cold starters: Hummus, Mohammara, Motabbal and Baba Ghanouj, served with Syrian fresh bread.',
      type: 'Vegetarian',
    },
  ];
  return (
    <Stack>
      <Stack direction="row" justifyContent="center">
        <Typography textAlign="center" variant="h2" borderBottom="2px solid #B39870" my={10}>
          COLD MEZZE
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
          /// /<Card sx={{ backgroundColor: 'background.default' }}>
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

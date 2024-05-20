import React from 'react';

import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

function MenuNav() {
  return (
    <Stack
      direction="row"
      sx={{
        height: 60,
        position: 'sticky',
        backgroundColor: 'primary.main',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Typography variant="h6"> COLD MEZZE </Typography>
      <Typography variant="h6"> HOT MEZZE </Typography>
      <Typography variant="h6"> SALAD </Typography>
      <Typography variant="h6"> BURGERS & WRAPS </Typography>
      <Typography variant="h6"> GRILLS </Typography>
      <Typography variant="h6"> HOMECOOKED DISHES </Typography>
      <Typography variant="h6"> PREORDER ONLY </Typography>
      <Typography variant="h6"> SIDES </Typography>
      <Typography variant="h6"> KIDS MEAL </Typography>
      <Typography variant="h6"> MIDDLE EASTERN SWEETS </Typography>
      <Typography variant="h6"> COLD DRINKS </Typography>
      <Typography variant="h6"> HOT DRINKS </Typography>
      {/* <NavHorizontal/> */}
    </Stack>
  );
}

export default MenuNav;

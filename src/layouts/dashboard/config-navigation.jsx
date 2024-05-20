import { useMemo } from 'react';


// ----------------------------------------------------------------------

export function useNavData() {

  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        // subheader: t('overview'),
        items: [
          {
            title: 'COLD MEZZE',
            path: '#coldMezze',
          },
          {
            title: 'HOT MEZZE',
            path: '#hotMezze',
          },
          {
            title: 'SALAD',
            path: '#salad',
          },
          {
            title: 'BURGERS & WRAPS',
            path: '#burgers',
          },
          {
            title: 'GRILLS',
            path: '#grills',
          },
          {
            title: 'HOMECOOKED',
            path: '#homecooked',
          },
          {
            title: 'PREORDER ONLY',
            path: '#preorder',
          },
          {
            title: 'SIDES',
            path: '#sides',
          },
          {
            title: 'KIDS MEAL',
            path: '#kids',
          },
          {
            title: 'MIDDLE EASTERN SWEETS',
            path: '#sweets',
          },
          {
            title: 'COLD DRINKS',
            path: '#coldDrinks',
          },
          {
            title: 'HOT DRINKS',
            path: '#hotDrinks',
          },
        ],
      },
    ],
    []
  );

  return data;
}

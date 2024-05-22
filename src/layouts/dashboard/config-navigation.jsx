import { useMemo } from 'react';

import { useSearchParams } from 'src/routes/hooks';

// ----------------------------------------------------------------------

export function useNavData() {
  const searchParams = useSearchParams();
  const query = searchParams.get('select');
  const appetizers = query === 'appetizers';
  const desserts = query === 'desserts';
  const dishes = query === 'dishes';
  const drinks = query === 'drinks';

  const items = useMemo(
    () => [
      {
        show: appetizers || !query,
        title: 'COLD MEZZE',
        sectionId: 'coldMezze',
      },
      {
        show: appetizers || !query,
        title: 'HOT MEZZE',
        sectionId: 'hotMezze',
      },
      {
        show: appetizers || !query,
        title: 'SALAD',
        sectionId: 'salad',
      },
      {
        show: dishes || !query,
        title: 'BURGERS & WRAPS',
        sectionId: 'burgers',
      },
      {
        show: dishes || !query,
        title: 'GRILLS',
        sectionId: 'grills',
      },
      {
        show: dishes || !query,
        title: 'HOMECOOKED',
        sectionId: 'homecooked',
      },
      {
        show: dishes || !query,
        title: 'PREORDER ONLY',
        sectionId: 'preorder',
      },
      {
        show: appetizers || !query,
        title: 'SIDES',
        sectionId: 'sides',
      },
      {
        show: dishes || !query,
        title: 'KIDS MEAL',
        sectionId: 'kids',
      },
      {
        show: desserts || !query,
        title: 'MIDDLE EASTERN SWEETS',
        sectionId: 'sweets',
      },
      {
        show: drinks || !query,
        title: 'COLD DRINKS',
        sectionId: 'coldDrinks',
      },
      {
        show: drinks || !query,
        title: 'HOT DRINKS',
        sectionId: 'hotDrinks',
      },
    ],
    [appetizers, desserts, drinks, dishes, query]
  );

  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        // subheader: t('overview'),
        items: items.filter((one) => one.show),
      },
    ],
    [items]
  );

  return data;
}

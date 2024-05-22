import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';

import Drawer from '@mui/material/Drawer';
import { Box, Stack, Button } from '@mui/material';

import { paths } from 'src/routes/paths';
import { useRouter, usePathname } from 'src/routes/hooks';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import NavList from './nav-list';

// ----------------------------------------------------------------------

export default function NavMobile({ data }) {
  const pathname = usePathname();

  const router = useRouter();

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = useCallback(() => {
    setOpenMenu(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setOpenMenu(false);
  }, []);

  return (
    <>
      {/* <IconButton onClick={handleOpenMenu} sx={{ ml: 1 }}> */}
      <Iconify
        onClick={handleOpenMenu}
        sx={{ ml: 1, cursor: 'pointer' }}
        width={40}
        icon="la:grip-lines"
      />
      {/* </IconButton> */}

      <Drawer
        open={openMenu}
        onClose={handleCloseMenu}
        PaperProps={{
          sx: {
            pb: 5,
            width: '100%',
          },
        }}
      >
        <Scrollbar>
          <Stack direction="row" justifyContent="space-between">
            <Logo sx={{ mx: 2.5, my: 3, width: 150, height: 150 }} />
            <Iconify
              onClick={handleCloseMenu}
              sx={{ p: 2, cursor: 'pointer' }}
              width={70}
              icon="carbon:close"
            />
          </Stack>
          <Stack sx={{ mt: 5 }}>
            {data.map((list) => (
              <NavList key={list.title} data={list} />
            ))}
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <Stack justifyContent="center" alignItems="center" gap={2} sx={{ my: 10, width: '100%' }}>
            <Button
              variant="outlined"
              onClick={() => router.push(paths.reservation)}
              // color="primary"
              sx={{
                height: 40,
                width: 200,
                fontSize: 14,
                fontWeight: 700,
                borderRadius: 0,
                border: '2px solid ',
                // bgcolor: 'primary.main',
              }}
            >
              MAKE A RESERVATION
            </Button>
            {/* <Button
              variant="outlined"
              // color="primary"
              sx={{
                height: 40,
                width: 200,
                fontSize: 14,
                fontWeight: 700,
                borderRadius: 0,
                border: '2px solid',
                bgcolor: 'primary.main',

              }}
            >
              CATERING
            </Button> */}
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}

NavMobile.propTypes = {
  data: PropTypes.array,
};

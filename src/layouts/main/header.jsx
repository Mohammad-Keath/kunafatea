import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import Badge, { badgeClasses } from '@mui/material/Badge';
import { Button, Divider, Typography } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { navConfig } from './config-navigation';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  // const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar sx={{ position: 'absolute', top: 0 }}>
      <Toolbar
      // disableGutters
      // sx={{
      //   // height: {
      //   //   xs: HEADER.H_MOBILE,
      //   //   md: HEADER.H_DESKTOP,
      //   // },
      //   // transition: theme.transitions.create(['height'], {
      //   //   easing: theme.transitions.easing.easeInOut,
      //   //   duration: theme.transitions.duration.shorter,
      //   // }),
      //   ...(offsetTop && {
      //     ...bgBlur({
      //       color: theme.palette.background.default,
      //     }),
      //     height: {
      //       // md: HEADER.H_DESKTOP_OFFSET,
      //     },
      //   }),
      // }}
      >
        <Stack sx={{ mb: { md: 10, sm: 0 } }} width={1}>
          {mdUp && (
            <Stack sx={{ my: 2 }} direction="row" justifyContent="space-around">
              <Stack sx={{ cursor: 'pointer' }} direction="row" columnGap={1}>
                <Iconify icon="mdi:address-marker" />
                <Typography variant="subtitle2">Thornton Rd, Bradford</Typography>
              </Stack>
              <Stack direction="row" columnGap={3}>
                <Stack sx={{ cursor: 'pointer' }} direction="row" columnGap={1}>
                  <Iconify icon="mingcute:phone-fill" />
                  <Typography variant="subtitle2">+44 7368 213111</Typography>
                </Stack>
                <Stack sx={{ cursor: 'pointer' }} direction="row" columnGap={1}>
                  <Iconify icon="ic:round-email" />
                  <Typography variant="subtitle2">kunafatea@gmail.com</Typography>
                </Stack>
              </Stack>
            </Stack>
          )}
          {mdUp && <Divider />}
          <Stack
            sx={{ px: { md: 10, xs: 2 }, py: 2 }}
            direction="row"
            justifyContent="space-between"
          >
            {/* <Box sx={{ flexGrow: 1 }} /> */}
            <Badge
              sx={{
                // ml: 10,
                [`& .${badgeClasses.badge}`]: {
                  top: 8,
                  right: -16,
                },
              }}
            >
              <Logo />
            </Badge>
            {mdUp && <NavDesktop data={navConfig} />}

            {mdUp && (
              <Stack direction="row" alignItems="flex-start" gap={5} sx={{ mt: 3 }}>
                <Button
                  variant="outlined"
                  // color="primary"
                  sx={{
                    height: 40,
                    width: 140,
                    fontSize: 14,
                    fontWeight: 700,
                    borderRadius: 0,
                    border: '2px solid ',
                    '&:hover': {
                      variant: 'contained',
                      bgcolor: 'primary.main',
                    },
                  }}
                >
                  RESERVATION
                </Button>
                <Button
                  variant="outlined"
                  // color="primary"
                  sx={{
                    height: 40,
                    width: 140,
                    fontSize: 14,
                    fontWeight: 700,
                    borderRadius: 0,
                    border: '2px solid',
                    '&:hover': {
                      variant: 'contained',
                      bgcolor: 'primary.main',
                    },
                  }}
                >
                  CATERING
                </Button>
              </Stack>
            )}

            {!mdUp && (
              <Stack alignItems="center" direction={{ xs: 'row', md: 'row-reverse' }}>
                <NavMobile data={navConfig} />
              </Stack>
            )}
          </Stack>
        </Stack>
      </Toolbar>

      {/* {offsetTop && <HeaderShadow />} */}
    </AppBar>
  );
}

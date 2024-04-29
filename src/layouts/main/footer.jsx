import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// import { paths } from 'src/routes/paths';
// import { usePathname } from 'src/routes/hooks';

import { _socials } from 'src/_mock';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

// const LINKS = [
//   {
//     headline: 'Minimal',
//     children: [
//       { name: 'About us', href: paths.about },
//       { name: 'Contact us', href: paths.contact },
//       { name: 'FAQs', href: paths.faqs },
//     ],
//   },
//   {
//     headline: 'Legal',
//     children: [
//       { name: 'Terms and Condition', href: '#' },
//       { name: 'Privacy Policy', href: '#' },
//     ],
//   },
//   {
//     headline: 'Contact',
//     children: [{ name: 'support@minimals.cc', href: '#' }],
//   },
// ];

// ----------------------------------------------------------------------

export default function Footer() {
  // const pathname = usePathname();

  // const homePage = pathname === '/';

  // const simpleFooter = (
  //   <Box
  //     component="footer"
  //     sx={{
  //       py: 5,
  //       textAlign: 'center',
  //       position: 'relative',
  //       bgcolor: 'background.default',
  //     }}
  //   >
  //     <Container>
  //       <Logo sx={{ mb: 1, mx: 'auto' }} />

  //       <Typography variant="caption" component="div">
  //         © All rights reserved
  //         <br /> made by
  //         <Link href="https://minimals.cc/"> minimals.cc </Link>
  //       </Typography>
  //     </Container>
  //   </Box>
  // );

  const mainFooter = (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Divider />

      <Container
        sx={{
          pt: 6,
          pb: 5,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Grid
          container
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
          mb={2}
        >
          <Grid xs={8} md={4}>
            <Logo sx={{ mb: 3, height: 100, width: 100 }} />
            <Typography
              variant="body2"
              sx={{
                maxWidth: 270,
                mx: { xs: 'auto', md: 'unset' },
                pb: { xs: 5, md: 0 },
              }}
            >
              Authentic Damascene Food & Desserts, having a price of being best resturant in
              Bradford
            </Typography>
          </Grid>

          <Grid xs={12} md={4}>
            <Stack
              spacing={2}
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{ width: 1, mt: 5 }}
            >
              <Typography variant="h6">OUR ADDRESS</Typography>
              <Box
                display="grid"
                gridTemplateColumns={{
                  xs: 'repeat(1, 1fr)',
                  md: 'repeat(1, 1fr)',
                }}
                gap={4}
                rowGap={1}
                sx={{
                  pb: { xs: 5, md: 0 },
                }}
              >
                <Stack sx={{ cursor: 'pointer' }} direction="row" alignItems="center" columnGap={1}>
                  <Iconify icon="mdi:address-marker" />
                  <Typography variant="body2">Thornton Rd, Bradford</Typography>
                </Stack>
                <Stack sx={{ cursor: 'pointer' }} direction="row" columnGap={1}>
                  <Iconify icon="mingcute:phone-fill" />
                  <Typography variant="body2">+44 7368 213111</Typography>
                </Stack>
                <Stack sx={{ cursor: 'pointer' }} direction="row" columnGap={1}>
                  <Iconify icon="ic:round-email" />
                  <Typography variant="body2">kunafatea@gmail.com</Typography>
                </Stack>
              </Box>
            </Stack>
          </Grid>
          <Grid xs={12} md={4}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} sx={{ mt: 5 }}>
              <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-start' }} sx={{ width: 1 }}>
                <Typography variant="h6">WORKING HOURS</Typography>

                <Box
                  display="grid"
                  gridTemplateColumns={{
                    xs: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                  }}
                  gap={4}
                  rowGap={1}
                  sx={{
                    pb: { xs: 5, md: 0 },
                  }}
                >
                  <Typography variant="body2">Monday - Saturday</Typography>
                  <Typography variant="body2">12:00 PM - 11:00 PM</Typography>
                  <Typography variant="body2">Sunday</Typography>
                  <Typography variant="body2">12:00 PM - 10:00 PM</Typography>
                </Box>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-end' }}
              sx={{
                mt: 3,
                mb: { xs: 5, md: 0 },
              }}
            >
              {_socials.map((social) => (
                <IconButton
                  key={social.name}
                  sx={{
                    '&:hover': {
                      bgcolor: alpha(social.color, 0.08),
                    },
                  }}
                >
                  <Iconify color={social.color} icon={social.icon} />
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 5}} />
        <Typography variant="body2" sx={{ mt: 1 }}>
          © Copyright Kunafatea resturant
        </Typography>
      </Container>
    </Box>
  );

  return mainFooter;
}

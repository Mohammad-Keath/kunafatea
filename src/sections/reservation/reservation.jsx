import { useMemo } from 'react';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { InputAdornment } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { fDate, fTime } from 'src/utils/format-time';

import { useSnackbar } from 'src/components/snackbar';
import RHFDatePicker from 'src/components/hook-form/rhf-date-picker';
import RHFTimePicker from 'src/components/hook-form/rhf-time-picker';
import FormProvider, { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function ReservationForm({ currentUser }) {
  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const defaultValues = useMemo(
    () => ({
      peopleNumber: '',
      day: new Date(),
      time: null,
      name: '',
      email: '',
      phone: '',
      request: '',
    }),
    []
  );

  const methods = useForm({
    // resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await emailjs.send(
        'service_fhhwg7b',
        'template_havzqpf',
        {
          form_type: 'Reservation',
          ...data,
          day: fDate(data.day),
          startTime: fTime(data.time),
        },
        {
          publicKey: 'hFoPaUo5UPj1WAnYG',
        }
      );
      reset();
      enqueueSnackbar('sent successfully!');
      router.push(paths.dashboard.user.list);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack sx={{ pt: 4, mx: { md: 0, xs: 4 } }}>
        <Box
          rowGap={7}
          columnGap={5}
          display="grid"
          sx={{ mt: 10 }}
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(3, 1fr)',
          }}
        >
          <RHFTextField
            type="number"
            name="peopleNumber"
            label="Number of People"
            InputProps={{
              textAlign: 'center',
              endAdornment: <InputAdornment position="start">People</InputAdornment>,
            }}
          />
          <RHFDatePicker name="day" label="Day" />
          <RHFTimePicker name="time" label="Time" />
          <RHFTextField name="name" label="Your Name" />
          <RHFTextField name="email" label="Email" />
          <RHFTextField name="phone" label="Phone Number" />
        </Box>
        <RHFTextField sx={{ mt: 7 }} multiline rows={3} name="request" label="Special Request" />

        <Stack alignItems="center" sx={{ mt: 6 }}>
          <LoadingButton
            sx={{
              px: 7,
              py: 1,
              fontSize: 16,
              borderRadius: 0,
              backgroundColor: 'primary.dark',
              color: 'white',
              '&:hover': {
                backgroundColor: 'primary.main',
              },
            }}
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Book Now
          </LoadingButton>
        </Stack>
      </Stack>
    </FormProvider>
  );
}

ReservationForm.propTypes = {
  currentUser: PropTypes.object,
};

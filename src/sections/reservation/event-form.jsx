import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { InputAdornment } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useSnackbar } from 'src/components/snackbar';
import RHFDatePicker from 'src/components/hook-form/rhf-date-picker';
import RHFTimePicker from 'src/components/hook-form/rhf-time-picker';
import FormProvider, { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function ReservationForm({ currentUser }) {
  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  //   const NewUserSchema = Yup.object().shape({
  //     name: Yup.string().required('Name is required'),
  //     email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  //     phoneNumber: Yup.string().required('Phone number is required'),
  //     address: Yup.string().required('Address is required'),
  //     country: Yup.string().required('Country is required'),
  //     company: Yup.string().required('Company is required'),
  //     state: Yup.string().required('State is required'),
  //     city: Yup.string().required('City is required'),
  //     role: Yup.string().required('Role is required'),
  //     zipCode: Yup.string().required('Zip code is required'),
  //     avatarUrl: Yup.mixed().nullable().required('Avatar is required'),
  //     // not required
  //     status: Yup.string(),
  //     isVerified: Yup.boolean(),
  //   });

  const defaultValues = useMemo(
    () => ({
      peopleNumber: '',
      day: new Date(),
      startTime: null,
      endTime: null,
      name: '',
      eventType: '',
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
    // watch,
    // control,
    // setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  // const values = watch();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar(currentUser ? 'Update success!' : 'Create success!');
      router.push(paths.dashboard.user.list);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  // const handleDrop = useCallback(
  //   (acceptedFiles) => {
  //     const file = acceptedFiles[0];

  //     const newFile = Object.assign(file, {
  //       preview: URL.createObjectURL(file),
  //     });

  //     if (file) {
  //       setValue('avatarUrl', newFile, { shouldValidate: true });
  //     }
  //   },
  //   [setValue]
  // );

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
          <RHFTimePicker name="startTime" label="Start time" />
          <RHFTimePicker name="endTime" label="End time" />
          <RHFTextField name="name" label="Your Name" />
          <RHFTextField name="email" label="Email" />
          <RHFTextField name="phone" label="Phone Number" />
          <RHFTextField name="eventType" label="Event type" />
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

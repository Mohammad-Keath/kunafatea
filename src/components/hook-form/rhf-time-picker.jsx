import PropTypes from 'prop-types';
// import { zonedTimeToUtc } from 'date-fns-tz';
import { Controller, useFormContext } from 'react-hook-form';

import { MobileTimePicker } from '@mui/x-date-pickers';

// ----------------------------------------------------------------------

export default function RHFTimePicker({ name, helperText, type, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <MobileTimePicker
          {...field}
          fullWidth
          // ampmInClock
          orientation="landscape"
          minutesStep="5"
          format="hh:mm a"
          value={field.value}
        //   InputLabelProps={{ shrink: true }}
          onChange={(newValue) => {
            field.onChange(newValue);
          }}
          slotProps={{
            textField: {
              fullWidth: true,
              variant: 'standard',
              error: !!error,
              helperText: error ? error?.message : helperText,
            },
          }}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        />
      )}
    />
  );
}

RHFTimePicker.propTypes = {
  helperText: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.string,
};

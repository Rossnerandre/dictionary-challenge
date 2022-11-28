import {Link as RouterLink} from 'react-router-dom';
// @mui
import {Box, BoxProps} from '@mui/material';

// ----------------------------------------------------------------------

export default function Logo({sx}: BoxProps) {

  const logo = (
    <Box
      component="img"
      src="logoPreto.png"
      sx={{width: 100, height: 50, cursor: 'pointer', ...sx}}
    />
  );

  return <RouterLink to="/">{logo}</RouterLink>;
}

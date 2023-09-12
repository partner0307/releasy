import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

const Container = ({ children, ...rest }) => {
  const theme = useTheme();
  return (
    <Box
      width={1}
      margin={'0 auto'}
      maxWidth={theme.spacing(77.25)}
      paddingX={{ xs: theme.spacing(1), sm: theme.spacing(3) }}
      {...rest}
    >
      {children}
    </Box>
  )
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;

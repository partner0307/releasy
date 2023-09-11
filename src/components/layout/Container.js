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
      padding={{md: theme.spacing(0, 6.88), sm: theme.spacing(0, 3), xs: theme.spacing(0, 1)}}
      overflow={'hidden'}
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

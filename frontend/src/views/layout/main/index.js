import { Outlet } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';

// project imports
import Header from './header';

// assets
import { IconChevronRight } from '@tabler/icons';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      main
    </Box>
  );
};

export default MainLayout;

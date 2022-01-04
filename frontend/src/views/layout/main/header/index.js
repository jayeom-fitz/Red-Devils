// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';

// project imports
import Logo from './logo';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = () => {
  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          // [theme.breakpoints.down('md')]: {
          //   width: 'auto',
          // },
        }}
      >
        <Logo />
      </Box>
    </>
  );
};

export default Header;

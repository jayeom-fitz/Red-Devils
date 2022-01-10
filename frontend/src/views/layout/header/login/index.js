import { useState } from 'react';

import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Chip } from '@mui/material';

// assets
import { IconLogin } from '@tabler/icons';

// ============================|| LOGIN SECTION ||============================ //

const LoginSection = () => {
  const theme = useTheme();

  const [onMouse, setOnMouse] = useState(false);

  return (
    <>
      <Chip
        sx={{
          height: '48px',
          alignItems: 'center',
          borderRadius: '27px',
          transition: 'all .5s ease-in-out',
          borderColor: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.light,
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.primary.main,
            background: `${theme.palette.primary.main}!important`,
            color: theme.palette.primary.light,
            '& svg': {
              stroke: theme.palette.primary.light,
            },
          },
        }}
        icon={<IconLogin style={{ marginLeft: '10px' }} />}
        label={onMouse ? 'LOGIN' : ''}
        variant="outlined"
        color="primary"
        component={Link}
        to="/login"
        onMouseEnter={() => setOnMouse(true)}
        onMouseLeave={() => setOnMouse(false)}
      />
    </>
  );
};

export default LoginSection;

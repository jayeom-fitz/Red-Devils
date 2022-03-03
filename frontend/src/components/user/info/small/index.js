import { useState } from 'react';

// material-ui
import { Avatar, Box, Typography } from '@mui/material';

// func
import { getNameColor, getNameWeight } from 'functions/funcUser';

// ===============================|| CONTENT BOX ||=============================== //

const UserInfoSmall = ({ user }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box sx={{ p: 1, display: 'flex', alignItems: 'center' }}>
        <Avatar alt="User Image" src={user.user_image_url} sx={{ '&:hover': { cursor: 'pointer' } }} />
        <span
          style={{
            color: getNameColor(user.user_level),
            fontWeight: getNameWeight(user.user_level),
            padding: '0 10px',
            cursor: 'pointer',
          }}
        >
          {user.user_name}
        </span>
      </Box>
    </>
  );
};

export default UserInfoSmall;

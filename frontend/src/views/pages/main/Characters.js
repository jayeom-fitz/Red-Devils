import React, { useState, useEffect } from 'react';

// material-ui
import { Box, Button, Typography } from '@mui/material';

// project imports
import Search from 'components/searches/basic';
import AddCharacter from './components/AddCharacter';

// assets
import { IconSquarePlus } from '@tabler/icons';

// ===============================|| CHARACTERS ||=============================== //

const Characters = () => {
  const [searchContent, setSearchContent] = useState('');

  const [open, setOpen] = useState(false);

  const user_level = sessionStorage.getItem('user_level');

  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
        }}
      >
        <Search value={searchContent} setValue={setSearchContent} />

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ flexGrow: 1 }} />

        {user_level && user_level >= 4 && (
          <Button variant="contained" color="success" startIcon={<IconSquarePlus />} onClick={() => setOpen(true)}>
            <Typography component="span" variant="h4" sx={{ fontWeight: 800 }}>
              Add
            </Typography>
          </Button>
        )}
      </Box>

      {open && <AddCharacter onClose={() => setOpen(false)} />}
    </>
  );
};

export default Characters;

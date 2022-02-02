import React, { useState, useEffect } from 'react';

// material-ui
import { Box, Button, Typography } from '@mui/material';

// third party
import axios from 'axios';

// project imports
import Search from 'components/searches/basic';
import AddCharacter from './components/characters/AddCharacter';
import CharacterCards from './components/characters/CharacterCards';

// assets
import { IconSquarePlus } from '@tabler/icons';

// ===============================|| CHARACTERS ||=============================== //

const Characters = () => {
  const [searchContent, setSearchContent] = useState('');

  const [open, setOpen] = useState(false);

  const [page, setPage] = useState(1);
  const [contentCount, setContentCount] = useState(1);
  const [characters, setCharacters] = useState([]);

  const user_level = sessionStorage.getItem('user_level');

  const count = 1;

  useEffect(() => {
    function getCharacters() {
      let url = process.env.REACT_APP_SERVER_URL + '/character/list?count=' + count;

      if (page) url += '&page=' + page;
      if (searchContent) url += '&name=' + searchContent;

      axios
        .get(url)
        .then((res) => {
          setCharacters(res.data.characters);
          setContentCount(res.data.count);
        })
        .catch((error) => alert(error));
    }

    getCharacters();
  }, [page, searchContent]);

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
      <CharacterCards page={page} setPage={setPage} characters={characters} contentCount={contentCount} count={count} />
    </>
  );
};

export default Characters;

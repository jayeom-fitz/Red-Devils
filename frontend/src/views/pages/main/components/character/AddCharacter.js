import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, TextField, Button, Stack } from '@mui/material';

// third party
import axios from 'axios';

// project imports
import MainCard from 'components/cards/MainCard';

// assets
import { IconPlus, IconX } from '@tabler/icons';

// ===============================|| ADD CHARACTER ||=============================== //

const AddCharacter = ({ onClose }) => {
  const theme = useTheme();

  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');

  const onSubmit = () => {
    const nameTrim = name.trim();
    const urlTrim = imageURL.trim();
    const regexName = /^[가-힣|a-z|A-Z|0-9|]+$/;

    if (!(regexName.test(nameTrim) && nameTrim.length > 0 && nameTrim.length <= 20)) return;

    axios
      .put(`${process.env.REACT_APP_SERVER_URL}/character`, {
        char_name: nameTrim,
        char_image_url: urlTrim,
      })
      .then((res) => {
        if (res) {
          alert('Success in adding data');
          onClose();
        }
      });
  };

  return (
    <>
      <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]} sx={{ margin: '20px 0' }}>
        <Box sx={{ p: 4 }}>
          <Stack direction="row" spacing={2}>
            <Box sx={{ width: 240 }}>
              <Avatar src={imageURL} size="badge" color="primary" outline="true" sx={{ width: 120, height: 120, margin: 'auto' }} />
            </Box>

            <Stack spacing={2} sx={{ width: 360 }}>
              <TextField label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <TextField label="Image URL" variant="outlined" value={imageURL} onChange={(e) => setImageURL(e.target.value)} fullWidth />
            </Stack>

            <Box>
              <Button sx={{ width: 60, height: '100%' }} variant="contained" onClick={onSubmit}>
                <IconPlus />
              </Button>
            </Box>

            <Box>
              <Button sx={{ width: 60, height: '100%' }} variant="contained" color="error" onClick={onClose}>
                <IconX />
              </Button>
            </Box>
          </Stack>
        </Box>
      </MainCard>
    </>
  );
};

export default AddCharacter;

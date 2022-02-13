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

// ===============================|| ADD CONTENT ||=============================== //

const AddContent = ({ onClose }) => {
  const theme = useTheme();

  const [title, setTitle] = useState('');
  const [imageURL, setImageURL] = useState('');

  const onSubmit = () => {
    const titleTrim = title.trim();
    const urlTrim = imageURL.trim();

    // if (!(regexName.test(nameTrim) && nameTrim.length > 0 && nameTrim.length <= 20)) return;

    // axios
    //   .put(`${process.env.REACT_APP_SERVER_URL}/character`, {
    //     char_name: nameTrim,
    //     char_image_url: urlTrim,
    //   })
    //   .then((res) => {
    //     if (res) {
    //       alert('Success in adding data');
    //       onClose();
    //     }
    //   });
  };

  return (
    <>
      <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]} sx={{ margin: '20px 0' }}>
        <Box sx={{ p: 4 }}>
          <Stack direction="row" spacing={2}>
            <Box sx={{ width: 240 }}>
              <img src={imageURL} alt="" style={{ width: 240, height: 135, margin: 'auto' }} />
            </Box>

            <Stack spacing={2} sx={{ width: 360 }}>
              <TextField label="Title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth />
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

export default AddContent;

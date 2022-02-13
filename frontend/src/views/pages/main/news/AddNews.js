import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, TextField, Button, Stack } from '@mui/material';

// third party
import axios from 'axios';

// project imports
import MainCard from 'components/cards/MainCard';

// assets
import { IconPlus, IconX } from '@tabler/icons';

// ===============================|| ADD NEWS ||=============================== //

const AddNews = () => {
  const theme = useTheme();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const MAX_TITLE = 30;
  const MAX_CONTENT = 300;

  const onSubmit = () => {
    const titleTrim = title.trim();
    const contentTrim = content.trim();

    if (!(titleTrim.length > 0 && titleTrim.length <= MAX_TITLE && contentTrim.length > 0 && contentTrim.length <= MAX_CONTENT)) {
      alert('re-enter, please.');
      return;
    }

    axios.put(`${process.env.REACT_APP_SERVER_URL}/content`, {
      cont_category: 'news',
      cont_title: titleTrim,
      cont_content: contentTrim,
    });

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

  const onClear = () => {
    setTitle('');
    setContent('');
  };

  return (
    <>
      <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
        <Box sx={{ p: 4 }}>
          <Stack direction="row" spacing={2}>
            <Stack spacing={2} sx={{ width: '80%' }}>
              <TextField
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                error={title.length > MAX_TITLE}
                fullWidth
              />
              <TextField
                label="Link"
                variant="outlined"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                error={content.length > MAX_CONTENT}
                fullWidth
              />
            </Stack>

            <Box>
              <Button sx={{ width: '10%', height: '100%' }} variant="contained" onClick={onSubmit}>
                <IconPlus />
              </Button>
            </Box>

            <Box>
              <Button sx={{ width: '10%', height: '100%' }} variant="contained" color="error" onClick={onClear}>
                <IconX />
              </Button>
            </Box>
          </Stack>
        </Box>
      </MainCard>
    </>
  );
};

export default AddNews;

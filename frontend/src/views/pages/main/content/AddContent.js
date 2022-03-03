import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, TextField, Button, Stack, Switch, FormControlLabel } from '@mui/material';

// third party
import axios from 'axios';

// project imports
import MainCard from 'components/cards/MainCard';

// assets
import { IconPlus, IconX } from '@tabler/icons';

// ===============================|| ADD CONTENT ||=============================== //

const AddContent = ({ user_srl, categoryId }) => {
  const theme = useTheme();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLink, setIsLink] = useState(true);

  const MAX_TITLE = 50;
  const MAX_CONTENT = 300;

  const onSubmit = () => {
    const titleTrim = title.trim();
    const contentTrim = content.trim();

    if (!(titleTrim.length > 0 && titleTrim.length <= MAX_TITLE && contentTrim.length > 0 && contentTrim.length <= MAX_CONTENT)) {
      alert('re-enter, please.');
      return;
    }

    axios
      .put(`${process.env.REACT_APP_SERVER_URL}/content`, {
        user_srl: user_srl,
        category_id: categoryId,
        cont_title: titleTrim,
        cont_content: contentTrim,
        cont_link: isLink,
      })
      .then((res) => {
        if (res.data) {
          alert('The created data is registered');
          onClear();
        }
      })
      .catch((error) => alert(error));
  };

  const onClear = () => {
    setTitle('');
    setContent('');
  };

  return (
    <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]} sx={{ width: '70%', margin: '0 auto' }}>
      <Box sx={{ p: 4 }}>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <TextField
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={title.length > MAX_TITLE}
            fullWidth
          />

          <Stack direction="row" spacing={2} justifyContent="center">
            <TextField
              label={isLink ? 'Link' : 'Comment'}
              variant="outlined"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              error={content.length > MAX_CONTENT}
              fullWidth
              multiline={!isLink}
            />

            <FormControlLabel control={<Switch checked={isLink} onChange={() => setIsLink(!isLink)} />} label={isLink ? '' : 'Link'} />
          </Stack>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button sx={{ width: '10%', height: '100%' }} variant="contained" onClick={onSubmit}>
              <IconPlus />
            </Button>
            <Button sx={{ width: '10%', height: '100%' }} variant="contained" color="error" onClick={onClear}>
              <IconX />
            </Button>
          </Stack>
        </Stack>
      </Box>
    </MainCard>
  );
};

export default AddContent;

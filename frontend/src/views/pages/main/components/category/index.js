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

// ===============================|| CATEGORIES ||=============================== //

const Categories = ({ cond, category }) => {
  const theme = useTheme();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSubmit = () => {
    const titleTrim = title.trim();
    const contentTrim = content.trim();

    if (!(titleTrim.length > 0 && titleTrim.length <= cond[0].max && contentTrim.length > 0 && contentTrim.length <= cond[1].max)) {
      alert('re-enter, please.');
      return;
    }

    // axios.put(`${process.env.REACT_APP_SERVER_URL}/content`, {
    //   cont_category: category,
    //   cont_title: titleTrim,
    //   cont_content: contentTrim,
    // });
  };

  const onClear = () => {
    setTitle('');
    setContent('');
  };

  return (
    <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]} sx={{ width: '50%', margin: '0 auto' }}>
      <Box sx={{ p: 4 }}>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <TextField
            label={cond[0].label}
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={title.length > cond[0].max}
            fullWidth
            multiline={cond[0].multi}
          />
          <TextField
            label={cond[1].label}
            variant="outlined"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            error={content.length > cond[1].max}
            fullWidth
            multiline={cond[1].multi}
          />

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

export default Categories;

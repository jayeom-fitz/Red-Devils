import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

// third party
import axios from 'axios';

// project imports
import MainCard from 'components/cards/MainCard';
import Search from 'components/searches/basic';

import List from 'components/content/list';

// assets
import { IconCirclePlus } from '@tabler/icons';

// ===============================|| CONTENT LIST ||=============================== //

const ContentList = ({ categoryId }) => {
  const theme = useTheme();

  const [value, setValue] = useState('');
  const [searchContent, setSearchContent] = useState('');
  const [contentList, setContentList] = useState([]);
  const [isMax, setIsMax] = useState(false);

  const count = 20;

  function getUrl(start, category_id, search) {
    let url = process.env.REACT_APP_SERVER_URL + '/content?active=1&start=' + start + '&count=' + count;

    if (category_id) url += '&categoryId=' + category_id;
    if (search) url += '&search=' + search;

    return url;
  }

  useEffect(() => {
    function getContentList() {
      const url = getUrl(0, categoryId, searchContent);

      axios.get(url).then((res) => {
        setContentList(res.data.contentList);
      });
    }

    getContentList();
    setIsMax(false);
  }, [categoryId, searchContent]);

  const getMoreContent = () => {
    let url = getUrl(contentList[contentList.length - 1].cont_srl, categoryId, searchContent);

    axios.get(url).then((res) => {
      if (res.data.contentList.length < count) {
        setIsMax(true);
      } else {
        setContentList([...contentList, ...res.data.contentList]);
      }
    });
  };

  return (
    <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]} sx={{ m: 1 }}>
      <Box sx={{ m: 1 }}>
        <Search value={value} setValue={setValue} onEnterKeyPress={() => setSearchContent(value)} />
      </Box>

      <List contentList={contentList} />

      {contentList && !isMax && (
        <Box sx={{ p: 4 }}>
          <Button variant="contained" color="secondary" fullWidth onClick={getMoreContent}>
            <IconCirclePlus />
          </Button>
        </Box>
      )}
    </MainCard>
  );
};

export default ContentList;

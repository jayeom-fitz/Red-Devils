// material-ui
import { Box, Stack } from '@mui/material';

// project
import ContentItem from './ContentItem';

// ===============================|| CONTENT LIST ||=============================== //

const ContentList = ({ contentList }) => {
  return (
    <Box sx={{ p: 5 }}>
      <Stack spacing={2}>
        {contentList &&
          contentList.map((c, index) => {
            return <ContentItem content={c} key={`content__${index}`} />;
          })}
      </Stack>
    </Box>
  );
};

export default ContentList;

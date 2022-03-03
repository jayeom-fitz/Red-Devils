import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider } from '@mui/material';
import { IconSettings } from '@tabler/icons';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from 'components/cards/MainCard';

import TopContent from './TopContent';

import UserInfoSmall from 'components/user/info/small';

// ===============================|| CONTENT BOX ||=============================== //

const ContentBox = ({ content }) => {
  const theme = useTheme();

  const [isDeleted, setIsDeleted] = useState(false);

  return (
    <>
      {!isDeleted && (
        <MainCard border={true} elevation={16} content={true} boxShadow shadow={theme.shadows[16]}>
          <TopContent content={content} setIsDeleted={setIsDeleted} />

          <Divider />
          <div>a</div>
        </MainCard>
      )}
    </>
  );
};

export default ContentBox;

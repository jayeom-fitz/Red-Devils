// material-ui
import { Grid } from '@mui/material';

// assets
import { IconX } from '@tabler/icons';

// project imports
import UserInfoSmall from 'components/user/info/small';

// function
import { getDateGap } from 'functions/funcDate';
import { contentToggleActive } from 'functions/axios/funcContent';

// ===============================|| CONTENT BOX TOP ||=============================== //

const TopContent = ({ content, setIsDeleted }) => {
  const user_srl = sessionStorage.getItem('user_srl');
  const user_level = sessionStorage.getItem('user_level');

  const toggleActive = () => {
    contentToggleActive(content.cont_srl).then((res) => {
      if (res) {
        alert('data has been deleted');
        setIsDeleted(true);
      }
    });
  };

  return (
    <>
      <Grid container sx={{ borderBottom: '1px solid lightgrey' }} justifyContent="center">
        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <UserInfoSmall
            user={{
              user_srl: content.user_srl,
              user_image_url: content.user_image_url,
              user_name: content.user_name,
              user_level: content.user_level,
            }}
          />
          <span style={{ padding: '0 10px' }}>{getDateGap(content.cont_regist_date)}</span>
        </Grid>
        <Grid item xs />
        <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center' }}>
          {user_srl && (user_level > 3 || user_srl === content.user_srl) && <IconX style={{ cursor: 'pointer' }} onClick={toggleActive} />}
        </Grid>
      </Grid>
    </>
  );
};

export default TopContent;

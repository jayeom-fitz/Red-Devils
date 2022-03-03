import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';

// project
import ContentBox from 'components/content/box';

// function
import { getDateGap } from 'functions/funcDate';

// ===============================|| CONTENT ITEM ||=============================== //

const ContentItem = ({ content }) => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <ContentBox content={content} />
      ) : (
        <Grid container sx={{ borderBottom: '1px solid lightgrey' }}>
          <Grid item xs={1}>
            <Typography component="span" variant="h6">
              {content.cont_srl}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography
              component="span"
              variant="h4"
              sx={{
                fontWeight: 800,
                '&:hover': {
                  color: 'white',
                  backgroundColor: theme.palette.error.main,
                  cursor: 'pointer',
                },
              }}
              onClick={() => setOpen(true)}
            >
              {content.cont_title}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            {getDateGap(content.cont_regist_date)}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ContentItem;

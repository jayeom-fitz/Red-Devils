import { useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, useMediaQuery } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

// third party
import axios from 'axios';
import GoogleLogin from 'react-google-login';

// project imports
// import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'components/extended/AnimateButton';

// ==========================|| GOOGLE LOGIN FORM ||========================== //

const GoogleLoginForm = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const login = (e) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/user/login`, {
        user_login_id: e.profileObj.googleId,
        user_name: e.profileObj.name,
        user_image_url: e.profileObj.imageUrl,
      })
      .then((res) => {
        const data = res.data;

        sessionStorage.setItem('user_srl', data.user_srl);
        sessionStorage.setItem('user_name', data.user_name);
        sessionStorage.setItem('user_level', data.user_level);
        sessionStorage.setItem('user_image_url', data.user_image_url);

        navigate('/');
      })
      .catch((e) => alert(e));
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      onSuccess={login}
      onFailure={(e) => alert('error : ', e)}
      cookiePolicy="single_host_origin"
      render={(renderProps) => (
        <Grid item xs={12}>
          <AnimateButton>
            <Button
              disableElevation
              fullWidth
              onClick={renderProps.onClick}
              size="large"
              variant="outlined"
              sx={{
                color: 'grey.700',
                backgroundColor: theme.palette.grey[50],
                borderColor: theme.palette.grey[100],
              }}
            >
              <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                <GoogleIcon width={16} height={16} style={{ marginTop: '8px', marginRight: matchDownSM ? 8 : 16 }} />
              </Box>
              <span>Sign in with Google</span>
            </Button>
          </AnimateButton>
        </Grid>
      )}
    />
  );
};

export default GoogleLoginForm;

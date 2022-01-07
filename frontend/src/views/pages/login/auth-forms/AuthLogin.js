// material-ui
import { Box, Grid } from '@mui/material';

// third party

// project imports
import GoogleLoginForm from './GoogleLoginForm';
// import GithubLoginForm from './GithubLoginForm';

// assets

// ============================|| LOGIN ||============================ //

const AuthLogin = () => {
  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ alignItems: 'center', display: 'flex' }}>
            <GoogleLoginForm />
          </Box>
        </Grid>
        {/* <Grid item xs={12}>
          <Box sx={{ alignItems: 'center', display: 'flex' }}>
            <GithubLoginForm />
          </Box>
        </Grid> */}
      </Grid>
    </>
  );
};

export default AuthLogin;

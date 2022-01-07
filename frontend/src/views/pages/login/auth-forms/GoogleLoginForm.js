// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

// third party
import GoogleLogin from 'react-google-login';

// project imports
// import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'components/extended/AnimateButton';

// ==========================|| GOOGLE LOGIN FORM ||========================== //

const GoogleLoginForm = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      onSuccess={(e) => console.log('success', e)}
      onFailure={(e) => console.log('fail', e)}
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

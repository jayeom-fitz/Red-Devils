// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography variant="subtitle2" component={Link} href="https://github.com/jayeom-fitz" target="_blank" underline="hover">
      github.com/jayeom-fitz
    </Typography>
    <Typography variant="subtitle2" underline="hover">
      jayeom93@naver.com
    </Typography>
  </Stack>
);

export default AuthFooter;

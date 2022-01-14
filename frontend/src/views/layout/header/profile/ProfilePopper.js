import { useState, useRef, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  Paper,
  Popper,
  Stack,
  Switch,
  Typography,
} from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from 'components/cards/MainCard';
import Transitions from 'components/extended/Transitions';

// assets
import { IconLogout, IconSearch, IconSettings, IconUser } from '@tabler/icons';

// ==============================|| PROFILE POPPER ||============================== //

const ProfilePopper = ({ open, anchorRef, handleClose }) => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  const navigate = useNavigate();

  const [value, setValue] = useState('');
  const [sdm, setSdm] = useState(true);
  const [notification, setNotification] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleListItemClick = (event, index, route = '') => {
    setSelectedIndex(index);
    handleClose(event);

    if (route && route !== '') {
      navigate(route);
    }
  };

  return (
    <Popper
      placement="bottom-end"
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      transition
      disablePortal
      popperOptions={{
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 14],
            },
          },
        ],
      }}
    >
      {({ TransitionProps }) => (
        <Transitions in={open} {...TransitionProps}>
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                <Box sx={{ p: 2 }}>
                  <Stack>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <Typography variant="h4">Good Morning,</Typography>
                      <Typography component="span" variant="h4" sx={{ fontWeight: 400 }}>
                        Johne Doe
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle2">Project Admin</Typography>
                  </Stack>
                  <OutlinedInput
                    sx={{ width: '100%', pr: 1, pl: 2, my: 2 }}
                    id="input-search-profile"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Search profile options"
                    startAdornment={
                      <InputAdornment position="start">
                        <IconSearch stroke={1.5} size="1rem" color={theme.palette.grey[500]} />
                      </InputAdornment>
                    }
                    aria-describedby="search-helper-text"
                    inputProps={{
                      'aria-label': 'weight',
                    }}
                  />
                  <Divider />
                </Box>
                <PerfectScrollbar
                  style={{
                    height: '100%',
                    maxHeight: 'calc(100vh - 250px)',
                    overflowX: 'hidden',
                  }}
                >
                  <Box sx={{ p: 2 }}>
                    {/* <UpgradePlanCard /> */}
                    <Divider />
                    <Card
                      sx={{
                        bgcolor: theme.palette.primary.light,
                        my: 2,
                      }}
                    >
                      <CardContent>
                        <Grid container spacing={3} direction="column">
                          <Grid item>
                            <Grid item container alignItems="center" justifyContent="space-between">
                              <Grid item>
                                <Typography variant="subtitle1">Start DND Mode</Typography>
                              </Grid>
                              <Grid item>
                                <Switch color="primary" checked={sdm} onChange={(e) => setSdm(e.target.checked)} name="sdm" size="small" />
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Grid item container alignItems="center" justifyContent="space-between">
                              <Grid item>
                                <Typography variant="subtitle1">Allow Notifications</Typography>
                              </Grid>
                              <Grid item>
                                <Switch checked={notification} onChange={(e) => setNotification(e.target.checked)} name="sdm" size="small" />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                    <Divider />
                    <List
                      component="nav"
                      sx={{
                        width: '100%',
                        maxWidth: 350,
                        minWidth: 300,
                        backgroundColor: theme.palette.background.paper,
                        borderRadius: '10px',
                        [theme.breakpoints.down('md')]: {
                          minWidth: '100%',
                        },
                        '& .MuiListItemButton-root': {
                          mt: 0.5,
                        },
                      }}
                    >
                      <ListItemButton
                        sx={{ borderRadius: `${customization.borderRadius}px` }}
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0, '/user/account-profile/profile1')}
                      >
                        <ListItemIcon>
                          <IconSettings stroke={1.5} size="1.3rem" />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="body2">Account Settings</Typography>} />
                      </ListItemButton>
                      <ListItemButton
                        sx={{ borderRadius: `${customization.borderRadius}px` }}
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1, '/user/social-profile/posts')}
                      >
                        <ListItemIcon>
                          <IconUser stroke={1.5} size="1.3rem" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Grid container spacing={1} justifyContent="space-between">
                              <Grid item>
                                <Typography variant="body2">Social Profile</Typography>
                              </Grid>
                              <Grid item>
                                <Chip
                                  label="02"
                                  size="small"
                                  sx={{
                                    bgcolor: theme.palette.warning.dark,
                                    color: theme.palette.background.default,
                                  }}
                                />
                              </Grid>
                            </Grid>
                          }
                        />
                      </ListItemButton>
                      <ListItemButton
                        sx={{ borderRadius: `${customization.borderRadius}px` }}
                        selected={selectedIndex === 4} /* onClick={handleLogout} */
                      >
                        <ListItemIcon>
                          <IconLogout stroke={1.5} size="1.3rem" />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="body2">Logout</Typography>} />
                      </ListItemButton>
                    </List>
                  </Box>
                </PerfectScrollbar>
              </MainCard>
            </ClickAwayListener>
          </Paper>
        </Transitions>
      )}
    </Popper>
  );
};

export default ProfilePopper;

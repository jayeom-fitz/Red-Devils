import { useState } from 'react';

// material-ui
import { IconButton, Button, Box, Card, Grid, Typography } from '@mui/material';

// project import
import Head from './Head';

// third party
import moment from 'moment';

// assets
import { IconChevronLeft, IconChevronsLeft, IconChevronRight, IconChevronsRight } from '@tabler/icons';

// ===============================|| WEEKLY CALENDAR ||=============================== //

const WeeklyCalendar = ({ setDate }) => {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment.clone();

  console.log('get', getMoment);
  console.log('today', today);

  return (
    <>
      <Box
        sx={{
          width: '100%',
          margin: '0 auto',
        }}
      >
        <Head getMoment={getMoment} setMoment={setMoment} />
      </Box>
    </>
  );
};

export default WeeklyCalendar;

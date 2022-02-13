import React, { useState, useEffect } from 'react';

// project imports
import Calendar from 'components/calendars/weekly';
import AddButton from 'components/buttons/AddButton';
import AddContent from './components/content/AddContent';

// material-ui
import { Box, Typography, Button } from '@mui/material';

// third party
import moment from 'moment';

// ===============================|| CONTENT ||=============================== //

const Content = () => {
  const [getMoment, setMoment] = useState(moment());
  const [date, setDate] = useState(parseInt(moment().format('YYYYMMDD')));

  const [open, setOpen] = useState(false);

  const user_level = sessionStorage.getItem('user_level');

  return (
    <>
      <Calendar getMoment={getMoment} setMoment={setMoment} date={date} setDate={setDate} />

      <Box sx={{ margin: '20px auto', textAlign: 'center' }}>
        <AddButton condition={user_level && user_level >= 4} variant="h4" color="success" onClick={() => setOpen(true)} />
      </Box>

      {open && <AddContent onClose={() => setOpen(false)} />}

      <Box sx={{ width: '80%', margin: '50px auto', textAlign: 'center' }}>
        <Typography component="span" variant="h4" sx={{ fontWeight: 800 }}>
          {date}'s Contents
        </Typography>
      </Box>
    </>
  );
};

export default Content;

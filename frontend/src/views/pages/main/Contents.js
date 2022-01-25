import React, { useState, useEffect } from 'react';

// project imports
import Calendar from 'components/calendars/weekly';

// material-ui
import { Box, Typography } from '@mui/material';

// third party
import moment from 'moment';

// ===============================|| CONTENTS ||=============================== //

const Contents = () => {
  const [getMoment, setMoment] = useState(moment());
  const [date, setDate] = useState(parseInt(moment().format('YYYYMMDD')));

  return (
    <>
      <Calendar getMoment={getMoment} setMoment={setMoment} date={date} setDate={setDate} />

      <Box sx={{ width: '80%', margin: '50px auto', textAlign: 'center' }}>
        <Typography component="span" variant="h4" sx={{ fontWeight: 800 }}>
          {date}'s Contents
        </Typography>
      </Box>
    </>
  );
};

export default Contents;

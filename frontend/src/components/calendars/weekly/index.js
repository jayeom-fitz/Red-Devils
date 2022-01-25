// material-ui
import { Box } from '@mui/material';

// project import
import Head from './Head';
import Body from './Body';

// ===============================|| WEEKLY CALENDAR ||=============================== //

const WeeklyCalendar = ({ date, setDate, getMoment, setMoment }) => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          margin: '0 auto',
        }}
      >
        <Head getMoment={getMoment} setMoment={setMoment} />
        <Body date={date} setDate={setDate} getMoment={getMoment} />
      </Box>
    </>
  );
};

export default WeeklyCalendar;

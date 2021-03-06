// material-ui
import { Box, Typography } from '@mui/material';

// =================================|| DAY BOX ||================================= //

const DayBox = ({ index, moment, date, setDate }) => {
  const m = moment.clone().day(index);

  return (
    <Box
      sx={{
        width: 'calc(100% / 7)',
        border: date === parseInt(m.format('YYYYMMDD')) ? '3px solid red' : '1px solid grey',
        color: index === 0 ? 'red' : index === 6 ? 'blue' : 'black',
        background: 'white',
        textAlign: 'center',
        boxSizing: 'border-box',
      }}
    >
      <Box>
        <Typography component="span" variant="h4" sx={{ fontWeight: 800, color: index === 0 ? 'red' : index === 6 ? 'blue' : 'black' }}>
          {m.format('ddd')}
        </Typography>
      </Box>

      <Box sx={{ height: '50px', lineHeight: '50px', cursor: 'pointer' }} onClick={() => setDate(parseInt(m.format('YYYYMMDD')))}>
        <Typography component="span" variant="h4" sx={{ fontWeight: 800, color: index === 0 ? 'red' : index === 6 ? 'blue' : 'black' }}>
          {parseInt(m.format('DD')) === 1 ? m.format('MMM DD') : m.format('DD')}
        </Typography>
      </Box>
    </Box>
  );
};

// =============================|| WEEKLY CALENDAR BODY ||============================= //

const Body = ({ date, setDate, getMoment }) => {
  const getDayBoxes = () => {
    let array = [];

    for (let i = 0; i < 7; i++) {
      // array.push(dayBox(i, getMoment));
      array.push(<DayBox key={`day__box__${i}`} index={i} moment={getMoment} date={date} setDate={setDate} />);
    }

    return array;
  };

  return (
    <>
      <Box
        sx={{
          width: '70%',
          display: 'flex',
          margin: '5px auto',
        }}
      >
        {getDayBoxes()}
      </Box>
    </>
  );
};

export default Body;

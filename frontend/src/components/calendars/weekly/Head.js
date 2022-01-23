// material-ui
import { Button, Box, Typography } from '@mui/material';

// assets
import { IconChevronLeft, IconChevronsLeft, IconChevronRight, IconChevronsRight } from '@tabler/icons';

// =============================|| WEEKLY CALENDAR HEAD ||============================= //

const Head = ({ getMoment, setMoment }) => {
  return (
    <>
      <Box
        sx={{
          width: '60%',
          display: 'flex',
          margin: '0 auto',
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setMoment(getMoment.clone().subtract(1, 'month'));
            }}
          >
            <IconChevronsLeft />
          </Button>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setMoment(getMoment.clone().subtract(1, 'week'));
            }}
          >
            <IconChevronLeft />
          </Button>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Typography component="span" variant="h2" sx={{ fontWeight: 800 }}>
            {getMoment.format('MMM YYYY')}
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setMoment(getMoment.clone().add(1, 'week'));
            }}
          >
            <IconChevronRight />
          </Button>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setMoment(getMoment.clone().add(1, 'month'));
            }}
          >
            <IconChevronsRight />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Head;

// material-ui
import { Box, Button } from '@mui/material';

// assets
import { IconChevronLeft, IconChevronsLeft, IconChevronRight, IconChevronsRight } from '@tabler/icons';

// ===============================|| PAGING BUTTON ||=============================== //

const PagingButton = ({ page, active, setPage }) => {
  return (
    <Button size="small" variant={active ? 'contained' : 'outlined'} color="secondary" onClick={() => setPage(page)}>
      {page}
    </Button>
  );
};

// ===============================|| PAGING BASIC ||=============================== //

const Paging = ({ page, setPage, count, contentCount }) => {
  const first = 1;
  const left = parseInt((page - 1) / 10) * 10;
  const right = (parseInt((page - 1) / 10) + 1) * 10 + 1;
  const last = Math.ceil(contentCount / count);

  const getButtons = () => {
    let array = [];

    for (let i = left + 1; i <= (right <= last ? right - 1 : last); i++) {
      array.push(<PagingButton key={`paging_index_${i}`} page={i} active={page === i} setPage={setPage} />);
    }

    return array;
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', p: 2 }}>
        {left !== 0 && (
          <>
            <Button onClick={() => setPage(first)}>
              <IconChevronsLeft />
            </Button>
            <Button onClick={() => setPage(left)}>
              <IconChevronLeft />
            </Button>
          </>
        )}

        {getButtons()}

        {right <= last && (
          <>
            <Button onClick={() => setPage(right)}>
              <IconChevronRight />
            </Button>
            <Button onClick={() => setPage(last)}>
              <IconChevronsRight />
            </Button>
          </>
        )}
      </Box>
    </>
  );
};

export default Paging;

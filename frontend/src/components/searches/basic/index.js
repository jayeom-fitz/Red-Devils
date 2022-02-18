// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Box, InputAdornment, OutlinedInput } from '@mui/material';

// assets
import { IconSearch } from '@tabler/icons';
import { shouldForwardProp } from '@mui/system';

// styles
const OutlineInputStyle = styled(OutlinedInput, { shouldForwardProp })(({ theme }) => ({
  width: 434,
  marginLeft: 16,
  paddingLeft: 16,
  paddingRight: 16,
  '& input': {
    background: 'transparent !important',
    paddingLeft: '4px !important',
  },
  [theme.breakpoints.down('lg')]: {
    width: 250,
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginLeft: 4,
    background: '#fff',
  },
}));

// ===============================|| SEARCH BASIC ||=============================== //

const Search = ({ value, setValue, onEnterKeyPress }) => {
  const theme = useTheme();

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onEnterKeyPress();
    }
  };

  return (
    <>
      <Box>
        <OutlineInputStyle
          id="input-search-basic"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder="Search"
          startAdornment={
            <InputAdornment position="start">
              <IconSearch stroke={1.5} size="1rem" color={theme.palette.grey[500]} />
            </InputAdornment>
          }
          aria-describedby="search-helper-text"
          inputProps={{ 'aria-label': 'weight' }}
        />
      </Box>
    </>
  );
};

export default Search;

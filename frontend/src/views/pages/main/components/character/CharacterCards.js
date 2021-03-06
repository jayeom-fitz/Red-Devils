import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Stack, Typography } from '@mui/material';

// third party
import Paging from 'components/paging/basic';

// project imports
import MainCard from 'components/cards/MainCard';

// assets

// ===============================|| CHARACTER CARD ||=============================== //

const CharacterCard = ({ character }) => {
  return (
    <Link to={`/character/${character.char_srl}`} style={{ textDecoration: 'none' }}>
      <MainCard border={true} elevation={16} boxShadow sx={{ m: 1 }}>
        <Stack spacing={2}>
          <Box sx={{ width: 120 }}>
            <Avatar src={character.char_image_url} size="badge" color="primary" outline="true" sx={{ width: 120, height: 120, margin: 'auto' }} />
          </Box>
          <Typography component="span" variant="h4" sx={{ fontWeight: 800, textAlign: 'center' }}>
            {character.char_name}
          </Typography>
        </Stack>
      </MainCard>
    </Link>
  );
};

// ===============================|| CHARACTER CARDS ||=============================== //

const CharacterCards = ({ page, setPage, count, contentCount, characters }) => {
  const theme = useTheme();

  return (
    <>
      <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]} sx={{ margin: '20px 0' }}>
        <Box sx={{ p: 4, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {characters.map((char, index) => (
            <CharacterCard key={`char_card_${index}`} character={char} />
          ))}
        </Box>

        {characters.length !== 0 && <Paging page={page} setPage={setPage} count={count} contentCount={contentCount} />}
      </MainCard>
    </>
  );
};

export default CharacterCards;

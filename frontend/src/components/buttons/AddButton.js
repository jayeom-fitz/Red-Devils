// material-ui
import { Typography, Button } from '@mui/material';

// assets
import { IconSquarePlus } from '@tabler/icons';

// ===============================|| ADD BUTTON ||=============================== //

const AddButton = ({ condition, variant, color, onClick }) => {
  return (
    <>
      {condition && (
        <Button variant="contained" color={color ? color : null} startIcon={<IconSquarePlus />} onClick={onClick}>
          <Typography component="span" variant={variant ? variant : null} sx={{ fontWeight: 800 }}>
            Add
          </Typography>
        </Button>
      )}
    </>
  );
};

export default AddButton;

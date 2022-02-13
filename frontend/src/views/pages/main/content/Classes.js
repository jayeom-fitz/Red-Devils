import React, { useState, useEffect } from 'react';

// material-ui
import { Button, Box } from '@mui/material';

// third party
import axios from 'axios';

// ===============================|| CLASSES ||=============================== //

const Classes = ({ classId, setClassId }) => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    function getClasses() {
      axios.get(`${process.env.REACT_APP_SERVER_URL}/content/class?active=1`).then((res) => {
        if (res.data.classes) {
          setClassId(res.data.classes[0].class_id);
          setClasses(res.data.classes);
        }
      });
    }
    getClasses();
  }, [setClassId]);

  return (
    <Box>
      {classes &&
        classes.map((c) => (
          <Button
            key={`class_button_${c.class_id}`}
            size="small"
            variant="contained"
            sx={{ m: 1 }}
            color={classId === c.class_id ? 'warning' : 'primary'}
            onClick={() => setClassId(c.class_id)}
          >
            {c.class_name}
          </Button>
        ))}
    </Box>
  );
};

export default Classes;

import React, { useState, useEffect } from 'react';

// material-ui
import { Button, Box } from '@mui/material';

// third party
import axios from 'axios';

// ===============================|| CATEGORIES ||=============================== //

const Categories = ({ categoryId, setCategoryId }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    function getCategories() {
      const all = { cate_id: '', cate_name: 'ALL' };

      axios.get(`${process.env.REACT_APP_SERVER_URL}/content/category?active=1`).then((res) => {
        setCategoryId('');
        if (res.data.categories) {
          setCategories([all, ...res.data.categories]);
        }
      });
    }
    getCategories();
  }, [setCategoryId]);

  return (
    <Box>
      {categories &&
        categories.map((c) => (
          <Button
            key={`cate_button_${c.cate_id}`}
            size="small"
            variant="contained"
            sx={{ m: 1 }}
            color={categoryId === c.cate_id ? 'error' : 'success'}
            onClick={() => setCategoryId(c.cate_id)}
          >
            {c.cate_name}
          </Button>
        ))}
    </Box>
  );
};

export default Categories;

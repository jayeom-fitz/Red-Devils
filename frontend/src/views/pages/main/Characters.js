import React, { useState, useEffect } from 'react';

// project imports
import Search from 'components/searches/basic';

// ===============================|| CHARACTERS ||=============================== //

const Characters = () => {
  const [searchContent, setSearchContent] = useState('');

  return (
    <>
      <Search value={searchContent} setValue={setSearchContent} />
    </>
  );
};

export default Characters;

import { useState } from 'react';

// project imports
import Categories from './Categories';
import AddContent from './AddContent';
import ContentList from './ContentList';

// ===============================|| CONTENT ||=============================== //

const Content = () => {
  const [categoryId, setCategoryId] = useState('');

  const user_srl = sessionStorage.getItem('user_srl');
  const user_level = sessionStorage.getItem('user_level');

  return (
    <>
      <Categories categoryId={categoryId} setCategoryId={setCategoryId} />

      {categoryId && user_srl && user_level > 1 && <AddContent user_srl={user_srl} categoryId={categoryId} />}

      <ContentList categoryId={categoryId} />
    </>
  );
};

export default Content;

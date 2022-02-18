import { useState } from 'react';

// project imports
import Classes from './Classes';
import Categories from './Categories';
import AddContent from './AddContent';
import ContentList from './list';

// ===============================|| CONTENT ||=============================== //

const Content = () => {
  const [classId, setClassId] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const user_srl = sessionStorage.getItem('user_srl');
  const user_level = sessionStorage.getItem('user_level');

  return (
    <>
      <Classes classId={classId} setClassId={setClassId} />
      <Categories categoryId={categoryId} setCategoryId={setCategoryId} />

      {classId && categoryId && user_srl && user_level > 1 && (
        <AddContent
          user_srl={user_srl}
          classId={classId}
          categoryId={categoryId}
          label={classId === 'C' ? 'Content' : 'Link'}
          multiline={classId === 'C'}
        />
      )}

      {classId && <ContentList classId={classId} categoryId={categoryId} />}
    </>
  );
};

export default Content;

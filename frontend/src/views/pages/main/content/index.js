import { useState } from 'react';

// project imports
import Classes from './Classes';
import Categories from './Categories';
// import AddContent from '../components/add/AddContent';

// ===============================|| ADD CONTENT ||=============================== //

const addContent = [
  {
    label: 'Title',
    max: 30,
    multi: false,
  },
  {
    label: 'Link',
    max: 300,
    multi: false,
  },
];

// ===============================|| CONTENT ||=============================== //

const Content = () => {
  const [classId, setClassId] = useState('');
  const [categoryId, setCategoryId] = useState('');

  return (
    <>
      <Classes classId={classId} setClassId={setClassId} />
      <Categories categoryId={categoryId} setCategoryId={setCategoryId} />
    </>
  );
};

export default Content;

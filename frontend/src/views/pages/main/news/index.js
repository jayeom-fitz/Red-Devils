// import {useState} from 'react'

// project imports
import AddNews from './AddNews';
import AddContent from '../components/add/AddContent';

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

// ===============================|| NEWS ||=============================== //

const News = () => {
  // const [news, setNews] = useState([]);

  return (
    <>
      <AddNews />
      <AddContent cond={addContent} category="N" />
    </>
  );
};

export default News;

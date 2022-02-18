// ===============================|| NEWS ||=============================== //

const News = ({ contentList }) => {
  return <>{contentList && contentList.map((c) => <div>{c.cont_title}</div>)}</>;
};

export default News;

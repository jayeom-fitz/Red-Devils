import React, { useState, useEffect } from 'react';

// project imports
import Calendar from 'components/calendars/weekly';

// ===============================|| CONTENTS ||=============================== //

const Contents = () => {
  const [date, setDate] = useState(0);

  return (
    <>
      {date}
      <Calendar setDate={setDate} />
    </>
  );
};

export default Contents;

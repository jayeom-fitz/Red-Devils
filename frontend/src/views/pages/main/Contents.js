import React, { useState, useEffect } from 'react';

// project imports
import Calendar from 'components/calendars/weekly';

// ===============================|| CONTENTS ||=============================== //

const Contents = () => {
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);

  return (
    <>
      {year}-{month}-{day}
      <Calendar />
    </>
  );
};

export default Contents;

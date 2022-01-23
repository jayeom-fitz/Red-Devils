import { useState } from 'react';

// third party
import moment from 'moment';

// ===============================|| DAY BOX ||=============================== //

const DayBox = () => {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;

  return (
    <>
      <div className="App">
        <div className="control">
          <button
            onClick={() => {
              setMoment(getMoment.clone().subtract(1, 'month'));
            }}
          >
            이전달
          </button>
          <span>{today.format('YYYY 년 MM 월 DD 일')}</span>
          <button
            onClick={() => {
              setMoment(getMoment.clone().add(1, 'month'));
            }}
          >
            다음달
          </button>
        </div>

        <div>
          {/* <div>{today.clone().startOf('month').week()}</div> */}
          {/* <div>{today.clone().day(0)}</div> */}
          {console.log('-----------------------------------------------')}
          {console.log(getMoment)}
          {console.log(getMoment.clone().day())}
          {console.log(getMoment.clone().days())}
          {console.log(getMoment.clone().day(0))}
          {console.log(getMoment.clone().days(0))}
          {console.log(today)}
        </div>
      </div>
    </>
  );
};

export default DayBox;

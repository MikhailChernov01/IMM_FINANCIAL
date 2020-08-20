import React, {useState} from 'react';

function dataEvents() {
  const[test, setTest] = useState(0);

   const appointments = [
  
    {
      title: 'Website Re-Design Plan',
      startDate: new Date(2020, 7, 25, 12, 0),
      endDate: new Date(2020, 7, 25, 13, 0),
    }, 
    {
      title: 'Book Flights to San Fran for Sales Trip',
      startDate: new Date(2020, 7, 23, 12, 0),
      endDate: new Date(2020, 7, 23, 13, 0),
    }, 
  ];


  return (
    <div>
      
    </div>
  );
}

export default dataEvents;





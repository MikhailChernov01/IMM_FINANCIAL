import React, { useCallback, useContext, useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { AuthContext } from '../../Auth';
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import { useInputs } from './useInputs';
import app from '../../firebase/firebase';
// import { appointments } from '../Scheduler/data-events/dataEvents';

function SchedulerChart() {
  const [arrList, setArrList] = useState('')


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
  
  const { currentUser } = useContext(AuthContext);
  
  const [input, getInformation] = useInputs({
    startDate: '',
    endDate: '',
    title: '',
  });
  
  const { startDate, endDate, title } = input;

  useEffect(() => {
    if (currentUser != null) {
      const currentUser = app.auth().currentUser;
      let uid = currentUser.uid;
      app
      .database()
      .ref(`Users/` + uid)
      .on('value', (state) => {
        const list =  state.val();
        const arrList =[];
        for (let item in list){
          arrList.push(list[item])
        }
       console.log();
       
       
        setArrList(arrList)
      });
    }
  },[currentUser]);
  
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log(event);
      const current = app.auth().currentUser;
      
      if (current != null) {
        let uid = current.uid;
        app
        .database()
        .ref(`Users/` + uid)
        .push({ title: title, startDate: startDate, endDate: endDate });
      } else {
        console.log('fffoooooo');
      }
    },
    [title, startDate, endDate]
    );
    console.log(arrList);
    
    
    return (
      <>
      <form method="POST" onSubmit={handleSubmit}>
        <input
          type="date"
          name="startDate"
          onChange={getInformation}
          value={input.startDate}
          />
        <input
          type="date"
          name="endDate"
          onChange={getInformation}
          value={input.endDate}
          />
        <input
          type="text"
          name="title"
          onChange={getInformation}
          value={input.title}
          />
        <button type="submit">Add event</button>
      </form>

      <Paper>
        <Scheduler data={appointments}>
          <ViewState defaultCurrentDate={Date.now()} />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments />
        </Scheduler>
      </Paper>
    </>
  );
}

export default SchedulerChart;





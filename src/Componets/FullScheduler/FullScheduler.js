import React, { useCallback, useContext, useEffect, useState } from 'react';
import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar/dist/fullcalendar.css';
import { useInputs } from './useInputs';
import { useInputsDelete } from './useInputs';
import { useInputsEdit } from './useInputs';
import app from '../../firebase/firebase';
import { AuthContext } from '../../Auth';
import '../FullScheduler/FullScheduler.css';

function FullScheduler() {
  const [arrList, setArrList] = useState('');
  const [arrDelete, setArrDelete] = useState('');
  const [editId, setEditId] = useState('');

  const state = { events: arrList };

  const { currentUser } = useContext(AuthContext);

  const [input, getInformation] = useInputs({
    title: '',
    start: '',
    end: '',
  });

  const [inputDelete, getInformationDelete] = useInputsDelete({
    title: '',
    start: '',
  });

  const [inputEdit, getInformationEdit] = useInputsEdit({
    title: '',
    start: '',
    end: '',
  });

  const { title, start, end } = input;

  useEffect(() => {
    if (currentUser != null) {
      const currentUser = app.auth().currentUser;
      let uid = currentUser.uid;
      console.log(inputDelete.start);
      app
        .database()
        .ref(`Users/` + uid)
        .on('value', (state) => {
          const list = state.val();
          const arrList = [];
          for (let item in list) {
            arrList.push({ item, ...list[item] });
          }
          setArrList(arrList);
          setArrDelete([...arrList]);
        });
    }
  }, [currentUser]);

  const handleSubmitAdd = useCallback(
    (event) => {
      event.preventDefault();

      const current = app.auth().currentUser;
      if (title === '' || start === '' || end === '') {
        alert('Add information');
      } else {
        if (current != null) {
          let uid = current.uid;
          app
            .database()
            .ref(`Users/` + uid)
            .push({ title: title, start: start, end: end });
        } else {
          console.log('fffoooooo');
        }
      }
    },
    [title, start, end]
  );

  const handleSubmitDelete = useCallback(
    (event) => {
      let id;
      event.preventDefault();
      const current = app.auth().currentUser;

      if (editId === '') {
        alert('Click an event and choose a date');
      } else {
        if (current != null) {
          arrDelete.forEach((el) => {
            if (el.start !== inputDelete.start && editId !== el.item) {
              // alert('Choose a right date');
              console.log('nooooo');
              
            } else {
              if (el.start === inputDelete.start && editId !== '') {
                id = editId;
              } else {
                if (el.start === inputDelete.start) {
                  id = el.item;
                } else {
                  id = editId;
                }
              }
            }
          });
        }

        let uid = current.uid;
        app
          .database()
          .ref(`Users/` + uid)
          .child(id)
          .remove();
      }
    },
    [arrDelete, inputDelete.start, inputDelete.title, editId]
  );

  const handleSubmitEdit = useCallback(
    (event) => {
      event.preventDefault();
      const current = app.auth().currentUser;
      if (
        inputEdit.title === '' ||
        inputEdit.start === '' ||
        inputEdit.end === ''
      ) {
        console.log('Fuck');
        
      } else {
        if (current != null) {
          // console.log(editId);
          // console.log(inputEdit.title);

          let uid = current.uid;
          app
            .database()
            .ref(`Users/` + uid)
            .child(editId)
            .update({
              title: inputEdit.title,
              start: inputEdit.start,
              end: inputEdit.end,
            });
        }
      }
    },
    [inputEdit.title, inputEdit.start, inputEdit.end]
  );

  return (
    <>
      <h1 className="header">Your Business Calendar for every day </h1>
      <br />
      <form method="POST" onSubmit={handleSubmitAdd}>
        <input
          type="date"
          name="start"
          onChange={getInformation}
          value={input.start}
        />
        <input
          type="date"
          name="end"
          onChange={getInformation}
          value={input.end}
        />
        <input
          type="text"
          name="title"
          onChange={getInformation}
          value={input.title}
          placeholder="Your event"
        />
        <button className="button15" type="submit">
          Add event
        </button>
      </form>

      <br />
      <form method="POST" onSubmit={handleSubmitEdit}>
        <input
          type="date"
          name="start"
          onChange={getInformationEdit}
          value={inputEdit.start}
        />
        <input
          type="date"
          name="end"
          onChange={getInformationEdit}
          value={inputEdit.end}
        />
        <input
          type="text"
          name="title"
          onChange={getInformationEdit}
          value={inputEdit.title}
          placeholder="Your event"
        />
        <button type="submit" className="button15">
          Edit event
        </button>
      </form>
      <br />
      <form method="POST" onSubmit={handleSubmitDelete}>
        <input
          type="date"
          name="start"
          onChange={getInformationDelete}
          value={inputDelete.start}
        />
        <input
          type="text"
          name="title"
          onChange={getInformationDelete}
          value={inputDelete.title}
          placeholder="Your event"
        />
        <button type="submit" className="button15">
          Delete event
        </button>
      </form>

      <br />

      <br />
      <div id="example-component" style={{ fontSize: '170%' }}>
        <FullCalendar
          id="your-custom-ID"
          header={{
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'month,basicWeek,basicDay',
          }}
          navLinks={true} // can click day/week names to navigate views
          editable={true}
          eventLimit={true} // allow "more" link when too many events
          events={state.events}
          eventClick={function (calEvent, jsEvent, view, resourceObj) {
            alert(
              `You wont to edit or delete yor event: ${calEvent.title}  on ${view.start}`
            );
            setEditId(calEvent.item);
          }}
        />
      </div>
    </>
  );
}

export default FullScheduler;

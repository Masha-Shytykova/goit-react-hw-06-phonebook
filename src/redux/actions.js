import { createAction } from '@reduxjs/toolkit';
import { v1 as uuidv1 } from 'uuid';

export const addContact = createAction('contacts/ADD', ({ name, number }) => {
  return {
    payload: {
      id: uuidv1(),
      name,
      number,
    },
  };
});

export const deleteContact = createAction('contacts/DELETE');
export const changeFilter = createAction('contacts/FILTER');

/////////////////////// redux
// import actionsTypes from './types';
// import { v1 as uuidv1 } from 'uuid';

// export const addContact = ({ name, number }) => ({
//   type: actionsTypes.ADD,
//   payload: {
//     id: uuidv1(),
//     name,
//     number,
//   },
// });

// export const deleteContact = contactId => ({
//   type: actionsTypes.DELETE,
//   payload: contactId,
// });

// export const changeFilter = value => ({
//   type: actionsTypes.FILTER,
//   payload: value,
// });

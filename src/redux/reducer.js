import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const itemsReducer = createReducer([], {
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [actions.addContact]: (state, { payload }) => [...state, payload],
});

const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;

/////////////////// redux
// import { combineReducers } from 'redux';
// import actionsTypes from './types';

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionsTypes.DELETE:
//       return state.filter(contact => contact.id !== payload);

//     case actionsTypes.ADD:
//       return [...state, payload];

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionsTypes.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// export default contactsReducer;

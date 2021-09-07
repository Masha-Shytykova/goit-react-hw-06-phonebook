import { combineReducers } from 'redux';

import actionsTypes from './types';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionsTypes.DELETE:
      return state.filter(contact => contact.id !== payload);

    case actionsTypes.ADD:
      return [...state, payload];

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionsTypes.FILTER:
      return payload;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;

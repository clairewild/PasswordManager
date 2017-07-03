import React from 'react';
import merge from 'lodash/merge';

import { RECEIVE_BORROW, REMOVE_BORROW } from '../actions/borrowing_actions.js';

const preloadedState = [
  {
    "website": "youtube.com",
    "username": "macklemore299",
    "password_id": "(*#$2k$SSD",
    "lender_user_id": "macklemore"
  },
  {
    "website": "hulu.com",
    "username": "lorenzo789",
    "password_id": "23789$$SSD",
    "lender_user_id": "lorenzochello"
  }
];

const BorrowingReducer = (state = preloadedState, action) => {
  Object.freeze(state);
  const newState = merge([], state);
  switch(action.type) {
    case RECEIVE_BORROW:
      newState.push(action.credential);
      return newState;
    case REMOVE_BORROW:
      const i = newState.indexOf(action.credential)
      if (i > -1) {
        newState.splice(i, 1);
      }
      return newState;
    default:
      return state;
  }
};

export default BorrowingReducer;

import { combineReducers } from 'redux';

import CredentialsReducer from './credentials_reducer.js'
import BorrowingReducer from './borrowing_reducer.js'
import LendingReducer from './lending_reducer.js'
import UserReducer from './user_reducer.js'

const RootReducer = combineReducers({
  own_credentials: CredentialsReducer,
  shared_with_me: BorrowingReducer,
  shared_with_others: LendingReducer,
  user: UserReducer
});

export default RootReducer;

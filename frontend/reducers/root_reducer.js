import { combineReducers } from 'redux';

import CredentialsReducer from './credentials_reducer.js'
import SharedReducer from './shared_reducer.js'
import SharingReducer from './sharing_reducer.js'
import UserReducer from './user_reducer.js'

const RootReducer = combineReducers({
  own_credentials: CredentialsReducer,
  shared_with_me: SharedReducer,
  shared_with_others: SharingReducer,
  user: UserReducer
});

export default RootReducer;

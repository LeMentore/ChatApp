import { combineReducers } from 'redux';
import messagesReducer from 'reducers/messages';
import userReducer from 'reducers/users';

const chatReducer = combineReducers({
    messagesReducer,
    userReducer
})

export default chatReducer;
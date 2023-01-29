import { combineReducers, createStore } from 'redux';
import counterReducer from './reducers/counterReducer';
import pickerReducer from './reducers/pickerReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  picker: pickerReducer,
});

const store = createStore(rootReducer);
export default store;

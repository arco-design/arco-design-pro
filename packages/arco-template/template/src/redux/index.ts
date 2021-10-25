import { combineReducers } from 'redux';
import global, { GlobalState } from './global';
import searchTable, { SearchTableState } from '../pages/search-table/redux/reducer';

export interface ReducerState {
  global: GlobalState;
  searchTable: SearchTableState;
}

export default combineReducers({
  global,
  searchTable,
});

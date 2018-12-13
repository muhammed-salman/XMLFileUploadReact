import { combineReducers } from 'redux';
import uploadFile from './uploadFile';
import viewFile from './viewFile';
import listFile from './listFile';


const appReducer = combineReducers({
  currentFile: uploadFile,
  displayFile: viewFile,
  allFiles: listFile
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}


export default rootReducer;

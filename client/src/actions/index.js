import axios from 'axios';
import _ from 'lodash';
import { FILE_UPLOAD, FILE_VIEW, FILE_VIEW_ERROR, SHOW_REPORT, LIST_FILES, PARSE_ERROR, FILE_NOT_FOUND, ERROR } from './types';

export const uploadFile = (jsonObj, xmlFileString, fileAttr) => async dispatch => {
  console.log('uploadFile',xmlFileString,fileAttr);
  const vehicles = jsonObj.vehicles.vehicle;
  const timeStamp = (new Date()).toString();

  try {
    const response= await axios.post(
      'http://localhost:3090/uploadfile',
      { vehicles, timeStamp, xmlFileString, fileAttr }
    );

    dispatch({ type: FILE_UPLOAD, payload: response.data });
  } catch (e) {
    dispatch({ type: ERROR, payload: 'Opps! we are not able to upload your file. Check that your connection is on. Ensure that you do not upload same file twice.' });
  }
};

export const viewFile = (id) => async dispatch => {

  try {
    const response= await axios.post(
      'http://localhost:3090/viewfile',
      { id }
    );
    dispatch({ type: FILE_VIEW, payload: response.data });
  } catch (e) {
    dispatch({ type: FILE_VIEW_ERROR, payload: 'Not able to get the file' });
  }
};

export const getAllFiles = () => async dispatch => {

  try {
    const response= await axios.get(
      'http://localhost:3090/getfiles');

    dispatch({ type: LIST_FILES, payload: response.data });
  } catch (e) {
    dispatch({ type: LIST_FILES_ERROR, payload: 'Not able to get the files list' });
  }
};

import { FILE_UPLOAD, ERROR } from '../actions/types';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {

  switch (action.type) {
    case FILE_UPLOAD:
      return action.payload;
    case ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}

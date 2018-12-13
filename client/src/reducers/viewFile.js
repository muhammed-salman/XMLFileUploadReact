import { FILE_VIEW, FILE_VIEW_ERROR } from '../actions/types';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {

  switch (action.type) {
    case FILE_VIEW:
      return action.payload;
    case FILE_VIEW_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}

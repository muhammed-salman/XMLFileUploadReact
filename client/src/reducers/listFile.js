import { LIST_FILES, LIST_FILES_ERROR } from '../actions/types';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {

  switch (action.type) {
    case LIST_FILES:
      return action.payload;
    case LIST_FILES_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}

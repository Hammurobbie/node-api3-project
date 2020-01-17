import {
  FETCH_USERS_LOADING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
  //   CREATE_USER_LOADING,
  //   CREATE_USER_SUCCESS,
  //   CREATE_USER_FAILURE,
  //   UPDATE_USER_LOADING,
  //   UPDATE_USER_SUCCESS,
  //   UPDATE_USER_FAILURE,
  //   DELETE_USER_LOADING,
  //   DELETE_USER_SUCCESS,
  //   DELETE_USER_FAILURE
} from "./actions";

const initialState = {
  users: [],
  error: null,
  isFetching: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_LOADING:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.payload
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;

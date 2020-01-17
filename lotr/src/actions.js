import axios from "axios";

export const FETCH_USERS_LOADING = "FETCH_USERS_LOADING";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const CREATE_USER_LOADING = "CREATE_USER_LOADING";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

export const UPDATE_USER_LOADING = "UPDATE_USER_LOADING";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

export const DELETE_USER_LOADING = "DELETE_USER_LOADING";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const fetchUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_LOADING });
  axios
    .get("https://api-hosting-test.herokuapp.com/users")
    .then(res => dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_USERS_FAILURE, payload: err }));
};

export const createUser = () => dispatch => {
  dispatch({ type: CREATE_USER_LOADING });
  axios
    .post()
    .then(res => dispatch({ type: CREATE_USER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: CREATE_USER_FAILURE, payload: err }));
};

export const updateUser = () => dispatch => {
  dispatch({ type: UPDATE_USER_LOADING });
  axios
    .put()
    .then(res => dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATE_USER_FAILURE, payload: err }));
};

export const deleteUser = () => dispatch => {
  dispatch({ type: DELETE_USER_LOADING });
  axios
    .get()
    .then(res => dispatch({ type: DELETE_USER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETE_USER_FAILURE, payload: err }));
};

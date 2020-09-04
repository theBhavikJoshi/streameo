import streams from "../api/streams";
import history from '../history';
import {
  CREATE_STREAM, DELETE_STREAM,
  EDIT_STREAM, GET_STREAM,
  GET_STREAMS, SIGN_IN, SIGN_OUT
} from './types';

export const signIn = user_id => {
  return {
    type: SIGN_IN,
    payload: user_id
  }
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
};

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', {...formValues, userId});
  dispatch({ type: CREATE_STREAM, payload: response.data });
  // push user to stream list after successful creation
  history.push('/');
};

export const getStreams = () => async dispatch => {
  const response = await streams.get('/streams');
  dispatch({ type: GET_STREAMS, payload: response.data });
};

export const getStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: GET_STREAM, payload: response.data });
};

export const deleteStream = id => async dispatch => {
  const response = await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};

export const editStream = id => async dispatch => {
  const response = await streams.put(`/streams/${id}`);
  dispatch({ type: EDIT_STREAM, payload: response.data });
};

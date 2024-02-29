import axios from 'axios';
axios.defaults.baseURL = 'https://64f1f5c60e1e60602d247ee1.mockapi.io/';

export const fetchQuzzes = async (signal = null) => {
  const resp = await axios.get('/quizzes', { signal });
  return resp.data;
};

export const fetchQuzzeByID = async id => {
  const resp = await axios.get('/quizzes/' + id);
  return resp.data;
};

export const deleteQuzzeByID = async quizID => {
  const resp = await axios.delete(`/quizzes/${quizID}`);
  return resp.data;
};

export const addQuizze = async quiz => {
  const resp = await axios.post(`/quizzes/`, quiz);
  return resp.data;
};

import axios from '../../config/http-common';

const getAll = async () => {
  try {
    const result = await axios.get('/users/userall');
    return result;
  } catch (error) {
    return error;
  }
};

const getId = async (id) => {
  try {
    const result = await axios.get(`/users/${id}`);
    return result;
  } catch (error) {
    return error;
  }
};

const create = async (data) => {
  try {
    const result = await axios.post('/users/new', data);
    return result;
  } catch (error) {
    return error;
  }
};

const update = async (data) => {
  try {
    const result = await axios.put(`/users/${data.userId}`, data);
    return result;
  } catch (error) {
    return error;
  }
};

const remove = async (id) => {
  try {
    const result = await axios.delete(`/users/${id}`);
    return result;
  } catch (error) {
    return error;
  }
};

const ApiUsers = {
  getAll,
  getId,
  create,
  update,
  remove,
};

export default ApiUsers;

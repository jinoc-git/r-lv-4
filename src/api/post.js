import axios from 'axios';

const URL = process.env.REACT_APP_SERVER_URL;

const getPosts = async () => {
  const res = await axios.get(`${URL}/posts`);
  return res.data;
};

const addPost = async (newPost) => {
  await axios.post(`${URL}/posts`, newPost);
};

const deletePost = async (id) => {
  await axios.delete(`${URL}/posts/${id}`);
};

const updatePost = async (contents) => {
  await axios.patch(`${URL}/posts/${contents.id}`, {...contents});
};

export { getPosts, addPost, deletePost, updatePost };

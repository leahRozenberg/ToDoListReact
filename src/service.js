
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API, 
});


axiosInstance.interceptors.response.use(
    response => response,
    error => {
        console.error('לללללללd:', error); 
        return Promise.reject(error);
    }
);

export default {
  getTasks: async () => {
    const result = await axios.get('')    
    return await result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await axios.post('', {name,isComplete:false})
    return {};
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    const result = await axios.put(`/${id}?iscomplete=${isComplete}`)
    return {};
  },

  deleteTask:async(id)=>{
    const result = await axios.delete(`/${id}`)
    console.log('deleteTask')
  }
};

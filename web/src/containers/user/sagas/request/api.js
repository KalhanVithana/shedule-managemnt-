import axios from "axios";
export const getAPIkey = (data)=>{
    
   localStorage.setItem('x-auth',data)
}


const apiHandler = {
  registerUser: (data) => {
    let _data = data.payload;

    return axios.post("http://localhost:4000/user/register", _data);
  },
  loginUser: (data) => {
    let _data = data.payload;

    return axios.post("http://localhost:4000/user/login", _data);
  },
};

export default apiHandler;

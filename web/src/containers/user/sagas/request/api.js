import axios from "axios";
export const getAPIkey = (data)=>{ 
   localStorage.setItem('x-auth',data)
}

export const getToken = ()=>{ 
  let token= localStorage.getItem('x-auth')
 
  console.log("token ",token)
  return token;
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

  UserComplain: (data) => {
    let _data = data.payload;

    console.log(_data)
    return axios.post("http://localhost:4000/user/cm", _data,{headers:{'x-auth':getToken()}});
  },

  registerAccount: (data) => {
    let _data = data.payload;
    return axios.post("http://localhost:4000/user/account", _data,{headers:{'x-auth':getToken()}});
  },

  ReplyNotification: (data) => {
    let _data = data.payload;
    return axios.put("http://localhost:4000/user/up/cm", _data,{headers:{'x-auth':getToken()}});
  },
};

export default apiHandler;

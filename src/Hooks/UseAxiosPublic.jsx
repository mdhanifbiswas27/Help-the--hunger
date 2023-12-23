// UseAxiosPublic.js
import axios from "axios";

const axiosPublic = axios.create({
  baseURL: 'https://my-assignment-eleven-server-site-q0osxmnty.vercel.app/'
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;

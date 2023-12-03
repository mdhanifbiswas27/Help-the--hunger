import axios from "axios";


const axiosPublic = axios.create({
    baseURL:'https://my-assignment-eleven-server-site-1rgkx3ejw.vercel.app/'
})

const UseAxiosPublic = () => {
    return  axiosPublic;
};

export default UseAxiosPublic;
import axios from "axios";


const API_URL="http://localhost:8000/api/users/";


//reg user

const register= async (userData)=>{
    const response= await axios.post(API_URL, userData);
    if(response.data){
        localStorage.setItem("user",JSON.stringify(response.data))
    }
    return response.data;
}

//logout

const logout=()=>{
    localStorage.removeItem("user")
    return null;
}

const authService={
    register,
    logout
}

export default authService;

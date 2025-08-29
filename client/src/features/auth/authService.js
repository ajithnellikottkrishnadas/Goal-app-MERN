import axios from "axios";
import  Axios  from "axios";

const API_URL = "http://localhost:8000/api/users/";

// reg

const register = async (userData)=>{
    const response = await axios.post(API_URL,userData);

    if(response.data){
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response.data
}

const authService={
    register
}

export default authService;
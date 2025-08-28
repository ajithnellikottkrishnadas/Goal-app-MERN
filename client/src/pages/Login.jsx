import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";



const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        password2: "",
        name: ""
    })

    const onchange=(e)=>{
    
        setFormData((prevValue)=>({
            ...prevValue,
            [e.target.name]: [e.target.value]
        }))

    }

    const onSubmit=(e)=>{
        e.preventDefault();
    }

    const { email, name, password, password2 } = formData;

    return (
        <>
            <section className="heading">
                <h1 >
                    <FaSignInAlt />   Login
                </h1>
  <p>Login and start adding Goals</p>
            </section>
            <section className="form">
                <form >
                    <div className="form-group">
                     <input 
                    type="text" 
                    className="form-control" 
                    id="email" name="email" 
                    value={email}  
                    placeholder="Enter your email" 
                    onChange={onchange}
                    />   
                    </div>
                    
                </form>
            </section>
            <section className="form">
                <form >
                    <div className="form-group">
                     <input 
                    type="password" 
                    className="form-control" 
                    id="password" name="password" 
                    value={password}  
                    placeholder="Enter your password" 
                    onChange={onchange}
                    />   
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block" >Register</button>
                    </div>
                    
                </form>
            </section>
            
        </>
    )
}

export default Login

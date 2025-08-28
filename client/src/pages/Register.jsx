import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";



const Register = () => {

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
                    <FaUser />  Register
                </h1>
                <p>Please create an account</p>
            </section>
            <section className="form">
                <form >
                    <div className="form-group">
                     <input 
                    type="text" 
                    className="form-control" 
                    id="name" name="name" 
                    value={name}  
                    placeholder="Enter your name" 
                    onChange={onchange}
                    />   
                    </div>
                    
                </form>
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
                    
                </form>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                     <input 
                    type="password" 
                    className="form-control" 
                    id="password2" name="password2" 
                    value={password2}  
                    placeholder="Confirm password" 
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

export default Register

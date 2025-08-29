import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";



const Register = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        password2: "",
        name: ""
    })

    const onchange = (e) => {

        setFormData((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value
        }))

    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            toast.error("password not match")
        }
        else {
            const userData = {
                name,
                email,
                password
            }
            console.log(userData);
            
            dispatch(register(userData))
        }
    }
    
    const { email, name, password, password2 } = formData;
    const { User, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        
        if (isError) {
            toast.error(message);
        }
        if (isSuccess) {
            console.log("success registered");
            
            navigate("/");
        }
        dispatch(reset());
        
    }, [User, isLoading, isError, isSuccess, message, navigate, dispatch])
    
    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please create an account</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={name}
                            placeholder="Enter your name"
                            onChange={onchange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={onchange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={onchange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="password2"
                            name="password2"
                            value={password2}
                            placeholder="Confirm password"
                            onChange={onchange}
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-block">
                            Register
                        </button>
                    </div>
                </form>
            </section>

        </>
    )
}

export default Register

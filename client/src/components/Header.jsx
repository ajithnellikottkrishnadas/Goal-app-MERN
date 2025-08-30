import { FaSignInAlt, FaUser, FaSignOutAlt } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset, logout } from "../features/auth/authSlice";




const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth)

    const onLogout=()=>{

        dispatch(logout());
        dispatch(reset());
        navigate("/");

    }

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">GoalSetter</Link>
            </div>
            <ul>
                {user ? (
                    <>
                    <li>
                        <button className="btn" onClick={onLogout}>
                                <FaSignOutAlt /> logout
                        </button>
                    
                </li>
                </>
                ) : (
                    <>
                        <li>
                             <Link to="/login">
                        <FaSignInAlt /> login
                    </Link>
                        </li>
                        <li>
                            <Link to="/register">
                                <FaUser />register
                            </Link>
                        </li>
                    </>
                )}

            </ul>

        </header>
    )
}

export default Header

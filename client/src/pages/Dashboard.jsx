import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import GoalForms from "../components/GoalForms";


const Dashboard = () => {


  const navigate = useNavigate();
  const {user}= useSelector((state)=>  state.auth)

  useEffect(()=>{
    if(!user){
      navigate("/login")
    }
  },[user, navigate])


  return (
    < >
    <section className=' heading'>
      <h1>Welcome {user && user.name}</h1>
      <p>Goals Dashboard</p>
      <GoalForms />
    </section>
    </>
  )
}

export default Dashboard

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalForms from "../components/GoalForms";
import { getGoals, reset } from "../features/goals/goalSlice";
import GoalItem from "./GoalItem";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { goals } = useSelector(
    (state) => state.goal
  );
useEffect(() => {
  if (!user) {
    navigate("/login");
    return;
  }
  dispatch(getGoals());

  return () => {
    dispatch(reset());
  };
}, [user, navigate, dispatch]); 
  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
        <GoalForms />
      </section>
      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />))}
          </div>
        ):(
          <h3>You have no Goals</h3>
        )}
      </section>
    </>
  );
};

export default Dashboard;

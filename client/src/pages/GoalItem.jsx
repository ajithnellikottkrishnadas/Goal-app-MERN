import { useDispatch } from "react-redux"
import { deleteGoal } from "../features/goals/goalSlice"

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div>
        {goal.createdAt
          ? new Date(goal.createdAt).toLocaleString("en-IN")
          : "No date available"}
      </div>
      <h2>{goal.text}</h2>
      <button
        onClick={() => dispatch(deleteGoal(goal._id))}
        className="close"
      >
        ✖
      </button>
    </div>
  )
}

export default GoalItem

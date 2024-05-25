// import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/tasksSlice";

export const Task = ({ task }) => {
  const dispath = useDispatch()

  //видаляє 
  const handleDelete = ()=>{
    dispath(deleteTask(task.id))

  }
  
  const handleToggle = ()=>{
    dispath(toggleCompleted(task.id))
  }

  return (
    <div className={css.wrapper}>
      <input
     
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete} >
        {/* <MdClose size={24} /> */}
      </button>
    </div>
  );
};

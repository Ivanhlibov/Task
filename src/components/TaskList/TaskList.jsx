import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { StatusFilter } from "../StatusFilter/StatusFilter";

import { statusFilters } from "../../redux/constants";
import { getTasks, getFilterStatus } from "../../redux/selectors";

export const TaskList = () => {
  const tasks = useSelector(getTasks)
  const filtersStatus = useSelector(getFilterStatus)

 const visibleTasks = tasks.filter((task)=>{
  switch (filtersStatus) {

    case statusFilters.active :
      return !task.completed;

      case statusFilters.completed :
        return task.completed === true;

    default:
      return task;
  }
  })


  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

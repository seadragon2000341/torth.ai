import Task from "./Task";
import { useState } from "react";
import moment from "moment";
function Tasks({ task, onDelete }) {
  const [showTasks, setshowTasks] = useState(true);
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color,
        backgroundColor: color,
        height: 1,
      }}
    />
  );
  return (
    <div>
      <span
        className="icon-down"
        onClick={() => setshowTasks(!showTasks)}
      ></span>
      Due:{moment(task[0]).format("DD MMMM YYYY")}
      {showTasks ? <Task task={task[1]} onDelete={onDelete} /> : null}
      <div>
        <ColoredLine color="black" />
      </div>
    </div>
  );

  //   <div className="row">
  //     <div className="col-12 text-right">
  //       <button className="button primary">New</button>
  //     </div>
  //     {tasks.map((task) => (
  //       <Task task={task} key={task.id} />
  //     ))}
  //     <div className="col-12"></div>
  //   </div>
  // );
}

export default Tasks;

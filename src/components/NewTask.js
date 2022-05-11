import { useState } from "react";
import AddTags from "./AddTags";

function NewTask({ show, handleClose, addTask }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [task, setTask] = useState({
    name: "",
    date: "",
    completed: false,
    tags: ["Education"],
    id: Date.now(),
  });

  const onSubmit = (event) => {
    event.preventDefault();
    setTask((prevState) => ({ ...prevState, id: Date.now() }));
    addTask(task);
  };
  const onChange = (event) => {
    const { name, value } = event.target;
    setTask((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <form
          className="form"
          onSubmit={onSubmit}
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
        >
          <input
            placeholder="Your New Task"
            required
            type="text"
            name="name"
            className="text-line"
            onChange={onChange}
          />
          <div>
            Due Date
            <input
              className="date-line"
              type="date"
              name="date"
              onChange={onChange}
              required
            />
            
          </div>
          
          <AddTags setTask={setTask} task={task} />
          <button type="button" className ="new-1" onClick={handleClose}>
            Close
          </button>
          <button type="submit" className="new" >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default NewTask;

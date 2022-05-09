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
          onSubmit={onSubmit}
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
        >
          <div>
            Task name
            <input
              placeholder="Enter task to add"
              required
              type="text"
              name="name"
              className="form-control"
              onChange={onChange}
            />
          </div>
         <div>Due Date
          <input
            type="date"
            name="date"
            onChange={onChange}
            required
            className="form-control"
            />
            </div>
          <label>Tags:</label>
          <AddTags setTask={setTask} task={task} />
          <button type="button" onClick={handleClose}>
            Close
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default NewTask;

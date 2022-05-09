import "./App.css";
import Tasks from "./components/Tasks";
import NewTask from "./components/NewTask";
import SearchTags from "./components/SearchTags";
import { useState, useEffect } from "react";
import _ from "lodash";
import FilterButtons from "./components/FilterButtons";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [tasks, setTasks] = useState([
    {
      name: "Do Homework",
      date: "2022-05-13",
      completed: false,
      tags: ["Education"],
      id: Date.now(),
    },
  ]);
  const [tagFilter, setTagFilter] = useState([]);
  const [showModal, setshowModal] = useState(false);
  const [showSideBar, setSideBar] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const addTask = (task) => {
    setTasks([task, ...tasks]);
  };
  const filter_map = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };
  const onDelete = (ID) => {
    setTasks(
      tasks.map((task) => {
        task.completed = task.id === ID ? !task.completed : task.completed;
        return task;
      })
    );
  };
  var sortedtasks = tasks
    .filter(filter_map[statusFilter])
    .filter((task) => tagFilter.every((tag) => task.tags.includes(tag)));
  sortedtasks = _.groupBy(sortedtasks, "date");

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div>
      {console.log(width)}
      <div className="main">
        {showSideBar && width < breakpoint ? (
          <SideBar
            setStatusFilter={setStatusFilter}
            tagFilter={tagFilter}
            setTagFilter={setTagFilter}
            setSideBar={setSideBar}
          ></SideBar>
        ) : (
          <button className="dropdown dropdown-1" onClick={() => setSideBar(true)}>
            SideBar
          </button>
        )}
        <h3>Welcome back,</h3>
        <p>You've got these tasks remaining</p>
        <FilterButtons setStatusFilter={setStatusFilter} />
        <div>
          <SearchTags tagFilter={tagFilter} setTagFilter={setTagFilter} />
        </div>
        {Object.entries(sortedtasks).map((task) => (
          <Tasks task={task} onDelete={onDelete} />
        ))}
        <NewTask
          show={showModal}
          handleClose={() => setshowModal(false)}
          addTask={addTask}
        />
        <button className="new" onClick={() => setshowModal(true)}>
          Create New Task
        </button>
      </div>
    </div>
  );
}

export default App;

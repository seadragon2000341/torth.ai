function Task({ task, onDelete }) {
  const tasklist = task.map((task) => (
    <div className = "task">
        <p className = "task" style={task.completed? { textDecoration: 'line-through'}: null}
          onClick={() => {
            const confirmBox = window.confirm(
              "Do you really want to delete this task?"
            );
            if (confirmBox === true) onDelete(task.id);
          }}
        >
        {task.name}
          </p><ul id="tags">
          {task.tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    
  ));

  return tasklist;
}

export default Task;

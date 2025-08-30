import Button1 from "../assets/components/Button1";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";
import "./Page2.css";

const Page2 = ({ tasks, setTasks, searchTerm }) => {
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAddTask = () => {
    if (input.trim() === "") return;

    const newTask = {
      text: input,
      timestamp: new Date().toLocaleString(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  const handleToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDelete = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

        Swal.fire({
          title: "Deleted!",
          text: "Your task has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (index, currentText) => {
    setEditIndex(index);
    setEditText(currentText);
  };

  const handleSaveEdit = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = editText;
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditText("");
  };

  return (
    <>
      <div className="page2-container">
        <h1 className="page2-title">TO DO LIST</h1>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          className="task-input"
        />
        <Button1
          text={<FaPlus />}
          fontSize={"10px"}
          margin={"15px"}
          border={"2px solid black"}
          onClick={handleAddTask}
        />

        <ul>
          {filteredTasks.map((task, index) => (
            <li key={index} className="task-item">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(index)}
              />

              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="edit-input"
                  />
                  <button
                    onClick={() => handleSaveEdit(index)}
                    className="save-btn"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span
                    className={`task-text ${
                      task.completed ? "completed" : ""
                    }`}
                  >
                    {task.text}
                  </span>
                  <button
                    onClick={() => handleEdit(index, task.text)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                </>
              )}

              <br />
              <small className="task-timestamp">
                Added: {task.timestamp}
              </small>

              <button
                onClick={() => handleDelete(index)}
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Page2;

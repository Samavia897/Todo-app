import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import { useState } from "react";
import "./App.css"; // make sure CSS import ho

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app-container">
      <div className="left-panel">
        <Page1 searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="right-panel">
        <Page2 tasks={tasks} setTasks={setTasks} searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default App;

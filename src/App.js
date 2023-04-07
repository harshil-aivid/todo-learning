import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

const HARD_CODED_TODO = [
  {
    id: 0,
    title: "Eat pakodi",
    isComplete: true,
  },
  {
    id: 1,
    title: "Timepass",
    isComplete: false,
  },
  {
    id: 2,
    title: "Teaching",
    isComplete: false,
  },
];

function App() {
  const [taskStatus, setTaskStatus] = useState(false);
  const [tasks, setTasks] = useState([...HARD_CODED_TODO]);
  const [input, setInput] = useState("");
  const toggleView = () => setTaskStatus(!taskStatus);

  const handleAdd = () => {
    if (input !== "") {
      const id = tasks.length;
      setTasks((prev) => [
        ...prev,
        {
          id: id,
          title: input,
          isComplete: false,
        },
      ]);
      setInput("");
    }
  };

  return (
    <div className="App">
      {" "}
      <input value={input} onInput={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd} disabled={input === ""}>
        {" "}
        Add{" "}
      </button>
      {tasks.map((todoObj, index) => (
        <Todo
          title={todoObj.title}
          status={todoObj.isComplete}
          toggleStatus={() => {
            const updatedTasks = tasks.map((todo, i) =>
              i === index
                ? { ...todo, isComplete: !todo.isComplete }
                : { ...todo }
            );
            setTasks(updatedTasks);
          }}
          handleDelete={() => {
            const updatedTasks = tasks.filter((todo, i) => i !== index);
            setTasks(updatedTasks);
          }}
        />
      ))}{" "}
    </div>
  );
}
export default App;

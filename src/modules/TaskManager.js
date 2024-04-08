import { useState, useEffect } from "react";
import { db } from "../firebase";
import { setDoc, getDoc, doc } from "firebase/firestore";
import "../index.css";
function TaskManager({ user }) {
  const [Tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (user) {
      const getData = async () => {
        const databaseRef = await doc(db, "users", user.uid);
        const data = await getDoc(databaseRef);
        let userTodo = (await data).data();
        if(userTodo){
          setTasks(userTodo.todos);
        }
      };
      getData();
    }
  }, [user]);
  async function addData() {
    if (input.length === 0) {
      return;
    }
      setTasks([
        ...Tasks,
        {
          content: input,
          isCompleted: false,
          isEditing: false,
        },
      ]);
    setInput("");
    if (user) {
      await setDoc(doc(db, "users", user.uid), {
        todos: [
          ...Tasks,
          {
            content: input,
            isCompleted: false,
          },
        ],
      });
    }
  }
 async function dltData(t) {
    Tasks.splice(t, 1);
    setTasks([...Tasks]);
    if (user) {
      await setDoc(doc(db, "users", user.uid), {
        todos: [
          ...Tasks
        ],
      });
    }
  }
async  function markCompleted(index) {
    Tasks[index].isCompleted = !Tasks[index].isCompleted;
    setTasks([...Tasks]);
    if (user) {
      await setDoc(doc(db, "users", user.uid), {
        todos: [
          ...Tasks,
          {
            content: input,
            isCompleted: !Tasks[index].isCompleted,
          },
        ],
      });
    }
  }
  function editTask(index) {
    Tasks[index].isEditing = true;
    setTasks([...Tasks]);
  }
  function updateTask(index, value) {
    Tasks[index].content = value;
    setTasks([...Tasks]);
  }
  async function saveTask(index) {
    Tasks[index].isEditing = false;
    setTasks([...Tasks]);if (user) {
      await setDoc(doc(db, "users", user.uid), {
        todos: [
          ...Tasks
        ],
      });
    }
  }
  return (
    <div className="container">
      <h1>TODO APP</h1>

      {Tasks && Tasks.length !== 0 && (
        <div className="tasks">
          {Tasks.sort((a) => (a.isCompleted ? 1 : -1)).map((task, index) => (
            <div key={index}>
              <input
                onChange={() => markCompleted(index)}
                type="checkbox"
                checked={task.isCompleted}
              />
              {task.isEditing ? (
                <input
                  className="update"
                  value={task.content}
                  onChange={(event) => updateTask(index, event.target.value)}
                />
              ) : (
                <div className="content">
                  {task.isCompleted ? <del>{task.content}</del> : task.content}

                  {"  "}
                </div>
              )}
              {task.isEditing ? (
                <button
                  className="save"
                  onClick={() => {
                    saveTask(index);
                  }}
                >
                  SAVE
                </button>
              ) : (
                <button className="edit" onClick={() => editTask(index)}>
                  EDIT
                </button>
              )}
              <button className="dlt" onClick={() => dltData(index)}>
                DELETE
              </button>
            </div>
          ))}
        </div>
      )}
      <form onSubmit={(event) => event.preventDefault()} className="add-task">
        <input
          onChange={(event) => setInput(event.target.value)}
          value={input}
          placeholder="Enter a task"
        />
        <button className="add" onClick={addData}>
          ADD TASK
        </button>
      </form>
    </div>
  );
}

export default TaskManager;

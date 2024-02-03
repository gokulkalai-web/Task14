import styles from "./Todo.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

const TodoList = ({ name, description, todos, setToDo }) => {

  const [status, setStatus] = useState("pending");
  const [isEditing, setIsEditing] = useState(false); //initally editing is false flag
  const [editData, setEditData] = useState({ name: "", description: "" }); 
  console.log(todos)
  const handleRemove = () => {
    setToDo((Todos) => Todos.filter((value) => value.name !== name));
  };

  //once we click edit button it will open a form with the help of setting set editing true.
  const handleEdit = () => {
    setEditData({ name, description }); //updating the data to the editdata state
    setIsEditing(true); //setting editing is true
  };

  const handleUpdate = () => {
    const editedTodo = {
      name: editData.name,
      description: editData.description,
      status: status,
    };
    setToDo((Todos) =>
      Todos.map((value) => (value.name === name ? editedTodo : value))
   );
    setIsEditing(false); //once updation is done setediting is false.
  };

  const handleColor = (e) => {
    setStatus(e.target.value); //set status
  };



  return (
    <div
      style={{
        width: "300px",
        margin: "20px",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "rgb(148, 203, 162)",
      }}
    >
      {isEditing ? (
        <form>
          <p>
            Name:
            <input
              type="text"
              value={editData.name}
              onChange={(e) =>
                setEditData({ ...editData, name: e.target.value })
              }
            />
          </p>

          <p>
            Description:
            <input
              type="text"
              value={editData.description}
              onChange={(e) =>
                setEditData({ ...editData, description: e.target.value })
              }
            />
          </p>
          <p>
            Status:
            <select
              style={{
                backgroundColor: status === "pending" ? "orange" : "green",
                width: "120px",
              }}
              onClick={handleColor}
            >
              <option value="pending">Not Completed</option>
              <option value="completed">Completed</option>
            </select>
          </p>
          <button type="button" onClick={handleUpdate}>
            Update
          </button>
        </form>
      ) : (
        <>
          <p>Name: {name}</p>
          <p>Description: {description}</p>
          <p>
            Status:{" "}
            <select
              style={{
                backgroundColor: status === "pending" ? "orange" : "green",
                width: "120px",
              }}
              onClick={handleColor}
            >
              <option value="pending">Not Completed</option>
              <option value="completed">Completed</option>
            </select>
          </p>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
          &nbsp;
          <button type="button" onClick={handleRemove}>
            Remove
          </button>
        </>
      )}
      <br />
    </div>
  );
};

TodoList.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  todos: PropTypes.object,
  setToDo: PropTypes.func,
};

const Todo = () => {
  //initial value for name and description
  const [inputValue, settextValue] = useState({ name: "", description: "" });
  //initial empty array to handle user name and desciption
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    //console.log("Name and value",name , value); //once e.target we are taking name, description values
    settextValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    console.log(inputValue);
  };
  // add function if input value are empty we should omit and if both are not empty we shoud set the todo
  const addInput = () => {
    if (inputValue.description !== "" && inputValue.name !== "") {
      setTodos([...todos, inputValue]);
      settextValue({ name: "", description: "" }); //again we are setting value back to empty.
    } else {
      console.log("Name and Description cannot be empty.");
    }
  };
  console.log(todos)
  return (
    <div style={{ textAlign: "center" }} className={styles.Main}>
      &nbsp;&nbsp;
      <h1>Todo</h1>
      &nbsp;&nbsp;
      <input
        type="text"
        onChange={handleInput}
        name="name"
        value={inputValue.name}
        placeholder="Name"
      ></input>
      &nbsp;&nbsp;
      <input
        type="text"
        onChange={handleInput}
        name="description"
        value={inputValue.description}
        placeholder="Description"
      ></input>
      &nbsp;&nbsp;
      <button type="button" onClick={addInput}>
        Add
      </button>
      <div className={styles.container}>
        {todos.map((todo) => (
          <TodoList
            key={todo.name}
            name={todo.name}
            description={todo.description}
            setToDo={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;

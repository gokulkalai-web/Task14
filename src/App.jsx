import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./App.module.css";

const data = [
  {
    name: "Johan",
    age: 30,
    occupation: "Developer",
  },
  {
    name: "Rafal",
    age: 26,
    occupation: "Developer",
  },
  {
    name: "Rick",
    age: 26,
    occupation: "Developer",
  },
  {
    name: "Gokul",
    age: 24,
    occupation: "Developer",
  },
];

const Demo = ({ name, occupation, handleIsLike, islike = false }) => {
  return (
    <div className={styles.demo}>
      <h1>Your name: {name}</h1>
      <p>You designation: {occupation} </p>
      <button onClick={() => handleIsLike(name)}>
        {islike ? "unLike" : "Like"}
      </button>
    </div>
  );
};

Demo.propTypes = {
  name: PropTypes.string,
  occupation: PropTypes.string,
  islike: PropTypes.bool,
  handleIsLike: PropTypes.func,
};

const App = () => {
  const [islikedata, setLikeData] = useState([]);
  const [count , setcount] = useState(0);
  const handleIsLike = (name) => {
    if (islikedata.includes(name)) {
      setLikeData(islikedata.filter((item) => item !== name));
      console.log("Inside if condition", islikedata);
      setcount(count - 1);
    } else {
      setLikeData([...islikedata, name]);
      setcount(count + 1);
      console.log("Inside else condition", islikedata);
    }
  };
  console.log("normal islikedata",islikedata);
  return (
    <>
      <div className={styles.count}>
        <span>{count}</span>
      </div>
      <div className={styles.container}>
        {data.map((value) => {
          return (
            <Demo
              key={value.name}
              {...value}
              handleIsLike={handleIsLike}
              islike={islikedata.includes(value.name)}
            />
          );
        })}
        ;
      </div>
    </>
  );
};

export default App;

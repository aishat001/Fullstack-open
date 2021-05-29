  
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// const Header = (props) => {
//   return <h1>{props.course.name}</h1>;
// };

// const Part = (props) => {
//   return (
//     <p>
//       {props.name} {props.excercises}
//     </p>
//   );
// };

// const Content = (props) => {
//   return (
//     <div>
//       <Part name={props.parts[0].name} excercises={props.parts[0].exercises} />
//       <Part name={props.parts[1].name} excercises={props.parts[1].exercises} />
//       <Part name={props.parts[2].name} excercises={props.parts[2].exercises} />
//     </div>
//   );
// };

// const Total = (props) => {
//   return (
//     <p>
//       Number of excercises{" "}
//       {props.parts[0].exercises +
//         props.parts[1].exercises +
//         props.parts[2].exercises}
//     </p>
//   );
// };

// const App = () => {
//   const course = {
//     name: "Half Stack application development",
//     parts: [
//       {
//         name: "Fundamentals of React",
//         exercises: 10,
//       },
//       {
//         name: "Using props to pass data",
//         exercises: 7,
//       },
//       {
//         name: "State of a component",
//         exercises: 14,
//       },
//     ],
//   };

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//     </div>
//   );
// };

const App = (props) => {
  console.log(props);
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () =>
  setClicks({ right: 0, left: clicks.left + 1 })

const handleRightClick = () =>
  setClicks({ ...clicks, right: clicks.right + 1 })
debugger;
  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
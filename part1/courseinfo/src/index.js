import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";



// const App = (props) => {
//   console.log(props);
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   const handleLeftClick = () =>
//   setClicks({ right: 0, left: clicks.left + 1 })

// const handleRightClick = () =>
//   setClicks({ ...clicks, right: clicks.right + 1 })
// debugger;
//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }
ReactDOM.render
(<App />,
 document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
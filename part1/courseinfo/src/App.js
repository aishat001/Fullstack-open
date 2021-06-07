import Content from "./component/content/Content";
import Header from "./component/header/Header";
import Total from "./component/total/Total";



  const App = () => {
    const course = [
    {
        id:1,
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id:2
        },
        {
          name: "State of a component",
          exercises: 14,
          id:3
        },
        {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
      ]
    },
    {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
   


    
  
    return (
      <div className="app">
          <div className="courseinfo">
             <Header course={course} />
            <Content parts={course.parts}/>
            <Total parts={course.parts} />
          </div>

      </div>
    );
  };

export default App;

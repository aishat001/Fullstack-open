
const Total = ({parts}) => {
const total = [parts[0].exercises, parts[1].exercises, parts[2].exercises];
  
  const all = total.reduce((a, b) => {
    return a + b;
  });

    return (
      <p>
        Total of{" "} 
          {all}
          {" "} excercises      
      </p>
    );
  };

  export default Total;
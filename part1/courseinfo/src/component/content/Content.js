
const Part = ({name, excercises}) => {
  return (
    <p>
      {name} {excercises}
    </p>
  );
}

  const Content = ({parts}) => {
    return (
      <div>
        <Part name={parts[0].name} excercises={parts[0].exercises}/>
        <Part name={parts[1].name} excercises={parts[1].exercises}/>
        <Part name={parts[2].name} excercises={parts[2].exercises}/>
      </div>
    );
  };

  export default Content;
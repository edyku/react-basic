import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Total = () => {
  var num = 0;

  for (var i = 0; i < PartLists.length; i++) {
    num = num + PartLists[i].exercises;
  }

  return (
    <div>
      <p>Number of exercises: {num}</p>
    </div>
  );
};

const Content = () => {
  const lists = PartLists.map(function (list) {
    return (
      <div>
        <Part part={list.part} exercises={list.exercises} />
      </div>
    );
  });

  return lists;
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part}: {props.exercises}
      </p>
    </div>
  );
};

const PartLists = [
  {
    id: 1,
    part: "Fundamentals of React",
    exercises: 10,
  },
  {
    id: 2,
    part: "Using props to pass data",
    exercises: 7,
  },
  {
    id: 3,
    part: "State of a component",
    exercises: 14,
  },
];

const App = () => {
  const course = "Half Stack application development";

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  );
};
export default App;

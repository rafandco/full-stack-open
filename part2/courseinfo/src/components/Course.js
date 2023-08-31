import React from "react";

const Header = ({ course }) => {
  console.log(course.parts[0]);
  return <h1>{course.name}</h1>;
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part} part={part} />
      ))}
    </div>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

/*const Total = (props) => {
  //console.log(props.parts);
  return (
    <p>
      Number of exercises{" "}
      {props.course.parts[0].exercises +
        props.course.parts[1].exercises +
        props.course.parts[2].exercises}
    </p>
  );
};
*/

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      {/*<Total course={course} />*/}
    </div>
  );
};

export default Course;

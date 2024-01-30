import React from "react";
import Links from "./links"; // Import Links component

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Conditionally render bio if it exists */}
      {props.bio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* Pass github and linkedin props to Links component */}
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
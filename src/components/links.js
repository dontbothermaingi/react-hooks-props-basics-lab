import React from "react";

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      {/* Render GitHub link if it exists */}
      {props.github && <a href={props.github}>{props.github}</a>}
      {/* Render LinkedIn link if it exists */}
      {props.linkedin && <a href={props.linkedin}>{props.linkedin}</a>}
    </div>
  );
}

export default Links;
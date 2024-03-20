import React from "react";

export default function Heading(props) {
  const date = new Date();
  const t = date.getHours();

  let greetings;

  const customStyle = {
    color: "",
  };

  if (t < 12) {
    greetings = "Good Morning";
    customStyle.color = "red";
  } else if (t < 18) {
    greetings = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greetings = "Good Night";
    customStyle.color = "blue";
  }
  return (
    <h1 className="heading" style={customStyle}>
      {greetings}
    </h1>
  );
}

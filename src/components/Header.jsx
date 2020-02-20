import React from "react";

let greeting;
const customStyle = { color: "black" };

function getGreeting() {
  currentHour = new Date().getHours();

  if (currentHour < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }
}

function Header() {
  getGreeting();
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Header;

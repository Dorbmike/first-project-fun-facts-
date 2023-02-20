import React from "react";
// import BackgroundLight from "./components/images/react-icon-light.png";
// import BackgroundDark from "./components/images/react-icon-dark.png";

export default function Main(props) {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>
          Has well over{" "}
          <a href="https://github.com/facebook/react">200K stars</a> on GitHub
        </li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
        <li>
          <a href="https://youtu.be/8pDqJVdNa44">
            Watch newest documentary film
          </a>
        </li>
      </ul>
    </main>
  );
}

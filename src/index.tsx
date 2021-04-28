import Post from "./Post";

// import "./styles/less.less"
import React from "react";
import { render } from "react-dom";
import style from "./styles/scss.module.scss";
import "./babel";
import styles from "./styles/test.module.pcss"
const post = new Post("Test Webpack");

const App = () => {
  return (
    <>
      <div className="container">
        <h1>Hello Webpack!</h1>
        
      </div>
      <div className="box">
        <h2>LESS</h2>
      </div>
      <div className="box2">
        <h3>SCSS</h3>
     <button className={styles.test}>BUTTON</button>
      </div>
    </>
  );
};

render(<App />, document.getElementById("root"));

console.log("Post to string", post.toString());

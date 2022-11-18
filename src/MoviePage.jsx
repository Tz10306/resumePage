import "./MoviePage.css";
import { useState } from "react";

function MoviePage() {
  const [MenuButton, setMenuButton] = useState(false);

  const menuFlag = { true: "active", false: "" };
  const handleClickMenu = () => {
    setMenuButton(!MenuButton);
  };

  return (
    <>
      <section className={"showCase" + " " + menuFlag[MenuButton]}>
        <header className="header">
          <div className="logo">
            <img src={require("./assets/logo.png")} alt="logo" />
          </div>
          <div
            className={"toggle" + " " + menuFlag[MenuButton]}
            onClick={handleClickMenu}
          ></div>
        </header>

        <div className="overlay" />

        <video
          src={require("./assets/Boxing1.m4v")}
          muted
          autoPlay={"autoplay"}
          loop
        />

        <div className="text">
          <h1>champions</h1>
          <h3>TestTestTestTestTestTestTestTest</h3>
          <p>
            TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest
          </p>
          <a href="">RESUME</a>
        </div>

        <ul className="social">
          <li>
            <a href="#">
              <img src={require("./assets/weixin.png")} alt="微信" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={require("./assets/qq.png")} alt="qq" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={require("./assets/weibo.png")} alt="微博" />
            </a>
          </li>
        </ul>
      </section>

      <div className={"menu"}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Introduce</a>
          </li>
          <li>
            <a href="#">Coachs</a>
          </li>
          <li>
            <a href="#">Lessons</a>
          </li>
          <li>
            <a href="#">Destination</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MoviePage;

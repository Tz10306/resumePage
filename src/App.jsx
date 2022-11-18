import { Link, Route } from "react-router-dom";
import "./App.css";
import MoviePage from "./MoviePage";

function App() {
  return (
    <>
      <div className="navi">
        <div className="link">
          <Link to={"/hello"}>你好</Link>
          <Link to={"/"} >清空</Link>
        </div>
      </div>
      <div className="view">
        <Route path={""} component={null} />
        <Route path={"/hello"} component={MoviePage} />
      </div>
    </>
  );
}

export default App;

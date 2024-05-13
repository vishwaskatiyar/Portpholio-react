import { Outlet } from "react-router-dom";
import "./App.css";
import Aside from "./Components/Aside";
import NaVbar from "./Components/NaVbar";

function App() {
  return (
    <>
      <Aside />
      <div className="main-content">
        <NaVbar />
        <section style={{ scrollBehavior: "smooth" }}>
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import "./App.css";
import { FloatingDockDemo } from "./components/component/FloatingDock";

function App() {
  return (
    <>
      <Outlet />
      <FloatingDockDemo/>
    </>
  );
}

export default App;

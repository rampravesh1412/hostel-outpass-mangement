
import "./App.css";
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer/Footer";
// import Singn



function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

    </>
  );
}

export default App;

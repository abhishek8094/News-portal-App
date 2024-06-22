import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = "/" element ={<Home/>}/>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

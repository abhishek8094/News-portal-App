import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Article from "./pages/Article";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = "/" element ={<Home/>}/>
        <Route path="/article/:title" element ={<Article/>}/>
      </Routes>
    </>
  );
}

export default App;

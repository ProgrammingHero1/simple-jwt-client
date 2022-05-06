import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import Orders from "./components/Orders";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="orders" element={<Orders/>} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

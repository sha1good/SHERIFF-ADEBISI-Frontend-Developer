import {
  BrowserRouter,
  Routes,
  Route,
  } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import "./global.css";
import { useSelector } from "react-redux";

const App = () => {
  const  { currentUser } = useSelector((state) => state.user)
  return (
    <div>
     <BrowserRouter>
       <Routes>
        <Route index path="/" element={currentUser ? <Home/> : <Register />}/>
        <Route path= "/login" element={<Login/>}/>
        <Route path= "/register" element={<Register/>}/>
       </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;

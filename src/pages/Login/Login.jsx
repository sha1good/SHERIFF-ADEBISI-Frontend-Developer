import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { publicRequest } from "../../hooks/requestMethod"
import { loginFailure,loginStart, loginSuccess } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux"

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const  {loading, error } = useSelector((state) => state.user)
  const [credentials, setCredentails] = useState({
    username: "",
    password: "",
  });
  

 const handleChnage = (event) => {
    setCredentails((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleClick = async (event) => {
    event.preventDefault();
    dispatch(loginStart());
    try {
      const response = await publicRequest.post(
        `/auth/signin`,
        credentials
      );
      response.status === 200 && navigate("/");
      dispatch(loginSuccess(response.data));
     } catch (error) {
      dispatch(loginFailure(error));
    }
  };

return (
    <div className="login">
      <div className="loginContainer">
      <h1 className="lgTitle">Login</h1>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChnage}
          className="lgInput"
          value={credentials.username}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChnage}
          className="lgInput"
          value={credentials.password}
        />
        <button
          onClick={handleClick}
          className="inputButton"
        >
          Login
        </button>
        {loading && <p className="lgLoading">Sending Request ....</p>}
        {!loading && error && <span className="lgError">{error.response?.data.message}</span>}
        <span className="span__already">Don't have an Account? <Link to="/register">Register</Link></span>
      </div>
     
    </div>
  );
};

export default Login;

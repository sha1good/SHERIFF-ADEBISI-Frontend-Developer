import "./register.css";
import { useState } from "react";
import { publicRequest } from "../../hooks/requestMethod";
import { Link, useNavigate } from "react-router-dom";
import useAuthForm from "../../hooks/useForm";

const Register = () => {
 const {
    value: enteredUsername,
    isValid: enteredUsernameIsValid,
    hasError: usernameHasError,
    resetForm: resetUsernameForm,
    valueChangeHandler: usernameChangeHandler,
    onBlurChangeHandler: usernameOnBlurHandler,
  } = useAuthForm((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    resetForm: resetEmailForm,
    valueChangeHandler: emailChangeHandler,
    onBlurChangeHandler: emailOnBlurHandler,
  } = useAuthForm((value) => value.trim().includes("@"));
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordHasError,
    resetForm: resetPasswordForm,
    valueChangeHandler: passwordChangeHandler,
    onBlurChangeHandler: passwordOnBlurHandler,
  } = useAuthForm((value) => value.trim() !== "");

  const [error, setError] = useState(null);
  const [loading,  setLoading] = useState(false);
  const navigate = useNavigate();

  let formIsValid = false;

  if (enteredUsernameIsValid && enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const handleClick = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    setLoading(true);

    try {
      const response = await publicRequest.post(`/auth/signup`, {
        username: enteredUsername,
        email: enteredEmail,
        password: enteredPassword,
      });
      setLoading(false)
      response.status === 200 && navigate("/login");
      resetUsernameForm();
      resetEmailForm();
      resetPasswordForm();
    } catch (error) {
      setLoading(false)
      setError(error);
    }
  };

  const usernameClasses = usernameHasError
    ? "registerContainer invalid"
    : "registerContainer";
  const emailClasses = emailHasError
    ? "registerContainer invalid"
    : "registerContainer";
  const passwordClasses = passwordHasError
    ? "registerContainer invalid"
    : "registerContainer";
  return (
    <div className="register">
      <div className="registerContainer">
        <h1 className="regTitle">Register</h1>
        <div className={usernameClasses}>
          <label htmlFor="email">Your username</label>
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={usernameChangeHandler}
            className="rgInput"
            value={enteredUsername}
            onBlur={usernameOnBlurHandler}
          />
        </div>
        {usernameHasError && (
          <p className="error-text">Please enter a valid Username</p>
        )}
        <div className={emailClasses}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Your email address"
            id="email"
            onChange={emailChangeHandler}
            className="rgInput"
            onBlur={emailOnBlurHandler}
            value={enteredEmail}
          />
        </div>
        {emailHasError && (
          <p className="error-text">Please enter a valid email Address</p>
        )}
        <div className={passwordClasses}>
        <label htmlFor="email">Your Password</label>
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={passwordChangeHandler}
            onBlur={passwordOnBlurHandler}
            value={enteredPassword}
            className="rgInput"
          />
        </div>
        {passwordHasError && (
          <p className="error-text">Please enter a valid Password</p>
        )}
        {!loading && (
        <button
          onClick={handleClick}
          className="inputRgButton"
          disabled={!formIsValid}
        >
          Register
        </button>
       )}
       {loading && <p className="rgLoading">Sending Request ....</p>}
        {!loading && error && (
          <span className="rgError">{error.response?.data.message}</span>
        )}
        <span className="span__already">
          Already has an Account? <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;

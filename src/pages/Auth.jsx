import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [mode, setMode] = useState("login");
  const isLogin = mode === "login";
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { signup, login, user, logout } = useContext(AuthContext); 

  function onSubmit(data) {
    setError(null);
    let result;
    if (isLogin) {
      result = login(data.email, data.password);
    } else {
      result = signup(data.username, data.email, data.password);
    }
    if (result.success) {
      navigate("/");
    } else {
      setError(result.message);
      reset()
    }
  }

  function switchMode() {
    setMode(isLogin ? "register" : "login");
    reset();
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">{isLogin ? "Login" : "Create account"}</h2>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          {error && <p className="error">{error}</p>}

          {!isLogin && (
            <>
              <input type="text" placeholder="Username"
                {...register("username", { required: "Username is required" })} />
              {errors.username && <p className="error">{errors.username.message}</p>}
            </>
          )}

          <input type="email" placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Enter a valid email" }
            })} />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <input type="password" placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Min 6 characters" }
            })} />
          {errors.password && <p className="error">{errors.password.message}</p>}

          <button type="submit" className="auth-btn">{isLogin ? "Login" : "Sign up"}</button>
        </form>

        <p className="auth-footer">
          {isLogin ? "No account? " : "Have an account? "}
          <span onClick={switchMode}>{isLogin ? "Sign up" : "Login"}</span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
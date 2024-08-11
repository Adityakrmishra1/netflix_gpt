import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_small.jpg"
          alt="background-image"
        />
        <form className="bg-black absolute w-3/12 m-1">
          <input type="text" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
          <div className="text-center mt-4">
            <a href="#">Forgot Password?</a>
          </div>
          <div className="text-center mt-4">
            <a href="#">New to Netflix? Sign up now.</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

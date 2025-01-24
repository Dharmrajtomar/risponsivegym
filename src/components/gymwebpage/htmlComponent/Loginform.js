import React, { useRef } from "react";
import "../cssComponent/Loginform.css";
const Loginform = () => {
  const loginRef = useRef();
  const signupRef = useRef();
  const loginhandler = () => {
    loginRef.current.classList.toggle("active");
    signupRef.current.classList.remove("active");
  };
  const signuphandler = () => {
    signupRef.current.classList.toggle("active");
    loginRef.current.classList.remove("active");
  };

  return (
    <>
      <section className="login-section">
        <div className="all-form-data">
          <div className="forms">
            <div className="a-log" onClick={loginhandler}>
              login
            </div>

            <div className="a-sign" onClick={signuphandler}>
              singup
            </div>
          </div>
          <div className="login-form">
            <div className="login-info" ref={loginRef}>
              <input
                type="text"
                name=""
                id=""
                placeholder="enter E-mail"
                color=""
              />
              <input type="password"
                name=""
                id=""
                placeholder="enter password"
              />
              <input type="submit" />
              <div className="form-forgot">
                Forget <a href="#a"> username /</a> <a href="#a">password</a>
              </div>
              <div className="form-new">
                <p>
                  Don't have an account ?{" "}
                  <span onClick={signuphandler}>Sign up</span>
                </p>
              </div>
            </div>
          </div>

          <div className="signup-form" ref={signupRef}>
            <input type="text" placeholder="enter your full name" />
            <input type="long" placeholder="enter number" />
            <input type="mail" placeholder="enter E-mail" />
            <input type="password" placeholder="inter password" />
            <input type="password" placeholder="conform password" />
            <input type="submit" name="" id="submit" />
            <h1 className="as" onClick={loginhandler}>
              <span>login </span>account
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loginform;

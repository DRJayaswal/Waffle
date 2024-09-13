import React, { useState } from "react";
import "./Login.css";

const Login = ({user,setUser}) => {
  const [isLogin, setLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState(null);

  const onLogIn = (e) => {
    e.preventDefault();
    setUser(true)
    console.log({
      username,
      password,
    });
  };

  const onSignUp = (e) => {
    e.preventDefault();
    if(password !== confirmPassword) return alert("Confirm Password is not the same");
    console.log({
      username,
      password,
      confirmPassword,
      avatar,
    })
  };

  const changeOption = () => {
    setLogin((prev) => !prev);
  };

  const handleAvatarChange = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      {isLogin ? (
        <div className="container">
          <form className="Lform" onSubmit={onLogIn}>
            <h1>Login</h1>
            <div className="Lusername">
              <label className="Llabel" htmlFor="username">
                Username
              </label>
              <input
                className="Linput"
                type="text"
                id="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="Lpassword">
              <label className="Llabel" htmlFor="password">
                Password
              </label>
              <input
                className="Linput"
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input type="submit" className="Lsubmit" value="Login" />
            <h3>Or</h3>
            <button type="button" className="Lsignup" onClick={changeOption}>
              Sign Up
            </button>
          </form>
        </div>
      ) : (
        <div className="container">
          <form className="Lform" onSubmit={onSignUp}>
            <h1>Sign Up</h1>




            <div className="avatar">
              {avatar && (
                <img
                  src={avatar}
                  className="avatar-pic"
                  alt="Uploaded file preview"
                />
              )}
              <div className="avatar-bundle">
                <label htmlFor="avatar" className="avatar-icon">
                <svg
                  htmlFor="avatar"
                  className="avatar-icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="black"
                >
                  <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                </svg>

                </label>
                <input
                  className="avatar-input"
                  type="file"
                  id="avatar"
                  onChange={handleAvatarChange}
                  required={true}
                />
              </div>
            </div>





            <div className="Lusername">
              <label className="Llabel" htmlFor="new-username">
                Username
              </label>
              <input
                className="Linput"
                type="text"
                id="new-username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="Lpassword">
              <label className="Llabel" htmlFor="new-password">
                Password
              </label>
              <input
                className="Linput"
                type="password"
                id="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="Lconfirm-password">
              <label className="Llabel" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                className="Linput"
                type="password"
                id="confirm-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="Lbuttons">
              <input type="submit" className="Lsubmit" value="Sign Up" />
              <h3>Or</h3>
              <button type="button" className="Llogin" onClick={changeOption}>
                Log In
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;

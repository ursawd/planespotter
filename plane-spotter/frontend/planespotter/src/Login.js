import React from "react";
import axios from "axios";

function Login() {
  console.log("IN LOGIN");
  async function doLogin() {
    const result = await axios.get("http://localhost:3001/", {
      body: { email: "pdb@gmail.com", password: "password" },
    });
    console.log(result);
  }
  doLogin();
  return (
    <div>
      <h1>LOGIN PAGE</h1>
    </div>
  );
}
export default Login;

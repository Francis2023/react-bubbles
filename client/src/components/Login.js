import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth"


class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials: {
        username: " ",
        password: " "
    }
};

handleChange = e => {
    this.setState({
        credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    })
}

login = e => {
  e.preventDefault();
  axiosWithAuth()
     .post("/api/login", this.state.credentials)
     .then(res => {
       console.log(res)
       localStorage.setItem("token", res.data.payload)
       this.props.history.push("/protected")
     })
     .catch(err => console.error(err))
}

render(){
   return (
      <div className="loginForm">
          <form onSubmit={this.login}>
              <label>Username</label>
              <input
                 type="text"
                 name="username"
                 value={this.state.credentials.username}
                 onChange={this.handleChange}
                 placeholder={"enter Username"}
              />
              <br />
              <label>Password</label>
              <input
                 type="password"
                 name="password"
                 value={this.state.credentials.password}
                 onChange={this.handleChange}
              />
              <br />
              <button className="login">Log In</button>
          </form>
      </div>
   )
}
};

export default Login;

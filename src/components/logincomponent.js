import React, { Component } from 'react'

const url = "https://avinashtech34.onrender.com"
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",


    };
    this.handleSubmit=this.handleSubmit.bind(this);

  }
  handleSubmit(e){
    e.preventDefault();
    const {email,password} = this.state;
    //console.log(fname);
   //  console.log(this.state.fname);
   //  console.log(this.state.lname);
    //console.log(email);
   //  console.log(this.state.password);
    fetch(url+"/login",{
     method:"POST",
     crossDomain:true,
     headers:{
       "content-Type":"application/json",
       Accept:"application/json",
       "Access-Control-Allow-Origin":"*"
     },
     body:JSON.stringify({
       //fname,
       email,
      //  lname,
       password
     }),

    }).then((res)=>
    res.json())
    .then((data)=>{
     console.log(data,"useregister");
     if(data.status=="ok"){
      alert("login successful");
      console.log("data.data",data.data)
      window.localStorage.setItem("token",data.data);
      window.localStorage.setItem("loggedin","true")
      window.location.href = "./userDetails";
  }
    })
   };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>this.setState({email:e.target.value})}

          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>this.setState({password:e.target.value})}

          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
}
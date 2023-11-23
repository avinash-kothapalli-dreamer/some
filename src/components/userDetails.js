import React, { Component } from "react";
export default class UserDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            userdata:"",
        };
        this.logout = this.logout.bind(this)
       }
    logout(){
        console.log("logout")
        window.localStorage.clear();
        window.location.href = "/sign-in"
    }
    componentDidMount()
    {
        fetch("http://localhost:5000/userData",{
            method:"POST",
            crossDomain:true,
            headers:{
              "content-Type":"application/json",
              Accept:"application/json",
              "Access-Control-Allow-Origin":"*"
            },
            body:JSON.stringify({
              token:window.localStorage.getItem("token"),
            }),
      
           })
           .then((res)=>
           res.json())
           .then((data)=>{
            console.log(data,"userdata");
            this.setState({userdata:data.data})
            if(data.data=="token expired"){
                alert("Token expired login again");
                window.localStorage.clear();
                window.location.href = "/sign-in"
        
            }
           }).catch((error)=>{
            console.log(error)
           });
          }
    
    render(){
        return (
            <div>
                Name:<h1>{this.state.userdata.fname}</h1>
                Email:<h1>{this.state.userdata.email}</h1><br/>
                <button onClick = {this.logout} className="btn btn-primary">Log Out</button>
            </div>
        );
    }

}
import React from 'react';

import './LoginPage.css';
import AdminHomePage from '../AdminHomePage/AdminHomePage.react';

class LoginPage extends React.Component {
    url="http://localhost:3000/credentials";
    constructor(props) {
        super(props);
        this.state = {credentials:[{}],
        userName:"",
        passWord:"",
        loaded:false }
    }

    onClickSubmit=()=>{
    fetch(this.url).then(data=>data.json())
        .then(credentials=>this.setState({credentials:credentials,loaded:true}));
    }
    onChangeofUserField =(event1)=>{
        this.setState({userName: event1.target.value})
      }
      onChangeofPassField =(event2)=>{
        this.setState({passWord: event2.target.value})
      }
    render() 
    {
        if(!this.state.loaded)
        {
        return (
            <div className='loginpage_wrapper'>
                <input type="text" onChangeUser={this.onChangeofUserField}>Username</input>
                <input type="password" onChangePass={this.onChangeofPassField}>Password</input>
                <button onClick={this.onClickSubmit}>Login</button>
            </div>
        );
        } 
        else
        {
        return(
           this.state.credentials.map(eachValue=> {
               if(eachValue.userName===this.state.userName && eachValue.passWord===this.state.passWord){
           return (
               <div className="container">
                   <AdminHomePage></AdminHomePage>
                </div> 
                 )
            }
    }))
    }
    }
}

export default LoginPage;
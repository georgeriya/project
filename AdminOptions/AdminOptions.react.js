import React from 'react';

import './AdminOptions.css';

class AdminOptions extends React.Component {
    driverUrl="";
    userUrl="";
    constructor(props) {
        super(props);
        this.state = {
            loaded:false,
            driverList:[{}],
            userList:[{}],
            flag:1
        }
    }

    onClickDrivers=()=>{
        fetch(this.driverUrl).then(data=>data.json())
            .then(driverList=>this.setState({driverList:driverList,loaded:true}));
            this.state.flag = 1;
        }
    onClickUsers=()=>{
        fetch(this.userUrl).then(data=>data.json())
            .then(userList=>this.setState({userList:userList,loaded:true}));
            this.state.flag = 2;
        }    

    render() {
        if(!this.state.loaded){
        return (
            <div className='adminoptions_wrapper'>
                <button onClick1={this.onClickDrivers}>Drivers</button>
                <button onClick2={this.onClickUsers}>Users</button>
                
            </div>
        );
    }
    

    else if(this.state.flag===1){
        return (
            
            <div className="container">
                {/* <DriverPage driverList ={this.state.driverList}></DriverPage> */}
            </div>
        )}

    else if(this.state.flag===2){
            return (
                
                <div className="container">
                    {/* <UserPage userList ={this.state.userList}></UserPage> */}
                </div>
            )}    
    }
}

export default AdminOptions;
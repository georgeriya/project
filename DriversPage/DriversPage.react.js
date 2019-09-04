import React from 'react';

import './DriversPage.css';

class DriversPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            action:"results",
            pass:{}
        }
    }

    render() {
        if(this.state.action==="results"){
        return (
            <div className='driverspage_wrapper'>

            </div>
        );
    }
}
}

export default DriversPage;
import React from 'react';

import './AdminHomePage.css';
import AdminOptions from '../AdminOptions/AdminOptions.react';

const AdminHomePage = () => {

    return (
        <div className='adminhomepage_wrapper'>
            <h1>Welcome Admin</h1>
            <AdminOptions></AdminOptions>
        </div>
    );

}

export default AdminHomePage;
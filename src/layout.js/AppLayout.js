import React from 'react';
import { ToastContainer } from 'react-toastify';
import AppBar from '../components/common/AppBar';

const AppLayout = (props) => {
    const { children } = props;
    return (
        <main>
            <AppBar />
            <ToastContainer />
            {children}
        </main>
    );
};

export default AppLayout;
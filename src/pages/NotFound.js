import React from 'react';
import AppLayout from '../layout.js/AppLayout';

const NotFound = () => {
    return (
        <AppLayout>
            <div className="container py-5 text-center">
                <h1>This page not found!</h1>
                <h3>404</h3>
            </div>
        </AppLayout>
    );
};

export default NotFound;
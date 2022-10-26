import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h3>{courses.title}</h3>
        </div>
    );
};

export default CheckOut;
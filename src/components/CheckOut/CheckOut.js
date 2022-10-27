import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const courses = useLoaderData();
    const {title, name, AuthorImage, courseDate} = courses; 
    return (
        <div className="dark:bg-gray-800 dark:text-gray-100 pt-6">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">{courseDate}</span>
                    <Link to="/courses" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Back to courses</Link>
                </div>
                <div className="mt-3">
                    <h2 className="text-2xl font-bold">{title}</h2>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div>
                        <div className="flex items-center justify-start">
                            <img src={AuthorImage} alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="dark:text-gray-400">{name}</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='mt-6' />
        </div>
    );
};

export default CheckOut;
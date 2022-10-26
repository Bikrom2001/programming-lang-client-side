import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
    const course = useLoaderData();
    const {title, description, image, name, AuthorImage, courseDate} = course ;
    return (
        <div className='bg-gray-700'>
            <div className="flex flex-col max-w-lg p-6 mt-5 mx-auto space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex space-x-4">
                    <img alt="" src={AuthorImage} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <Link rel="noopener noreferrer" href="#" className="text-sm font-semibold">{name}</Link>
                        <span className="text-xs dark:text-gray-400">{courseDate}</span>
                    </div>
                </div>
                <div>
                    <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                    <p className="text-sm dark:text-gray-400">{description}</p>
                </div>
            </div>


        </div>
    );
};

export default CoursesDetails;
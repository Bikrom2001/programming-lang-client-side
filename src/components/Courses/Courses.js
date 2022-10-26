import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourses from '../SingleCourses/SingleCourses';

const Courses = () => {

    const AllCourses = useLoaderData();

    return (
        <div className="dark:bg-gray-800 dark:text-gray-50">
            <div className="container grid grid-cols-12 mx-auto">
                <div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover dark:bg-gray-700 lg:col-span-3 lg:h-auto">
                    
                </div>
                <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-9 lg:p-10 divide-gray-700">
                    <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                        {
                            AllCourses.map(coures => <SingleCourses key={coures.id} coures={coures}></SingleCourses>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
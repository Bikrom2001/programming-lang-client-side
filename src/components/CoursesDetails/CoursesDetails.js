import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";



const ref = React.createRef();


const CoursesDetails = () => {
    const course = useLoaderData();
    const { title, description, image, name, AuthorImage, courseDate } = course;
    return (
        <div className='bg-gray-700 pt-3 pb-5'>
            <div className="flex flex-col max-w-lg p-6 mt-5 mx-auto space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div ref={ref}>

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

                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <Link to='/courses'><button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Back to Course</button></Link>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf} type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Download File</button>}
                    </Pdf>

                </div>
            </div>


        </div>
    );
};

export default CoursesDetails;
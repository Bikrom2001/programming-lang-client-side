import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourses = ({coures}) => {

    const {title, image, id, description} = coures;


    return (
        <article className="flex flex-col dark:bg-gray-900">
        <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
            <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={image} />
        </Link>
        <div className="flex flex-col flex-1 p-6">
            <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{title}</h3>
            <p>{description.slice(0, 100) + '...'}</p>
            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
            <Link to={`/details/${id}`}><button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Details</button></Link>
            <Link to={`/checkout/${id}`}><button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Check Out</button></Link>
            </div>
        </div>
    </article>
    );
};

export default SingleCourses;
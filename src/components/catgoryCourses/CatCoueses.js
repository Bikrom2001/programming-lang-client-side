import React from 'react';
import { Link } from 'react-router-dom';

const CatCoueses = ({cou}) => {
    const {id} = cou ;
    return (
        <div>
           <Link to={`/details/${id}`}><button type="button" className="px-3 mx-auto w-full mt-4 py-2 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">{cou?.title}</button></Link>
        </div>
    );
};

export default CatCoueses;
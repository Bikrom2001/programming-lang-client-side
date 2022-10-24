import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section>
            <div className="bg-gray-100">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-44 md:py-32 md:px-10 lg:px-32 text-gray-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-800">
                        Welcome To Online courses
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">Our excellent selection of courses has been specifically designed to help industry professionals work with today's best-of-breed automation tools. Our objective is to make our students professional and experienced in what they learn.</p>
                    <div className="flex flex-wrap justify-center">
                        <Link to="/courses">
                            <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button>
                        </Link>
                        <Link to="/blog">
                            <button className="px-8 py-3 m-2 text-lg border rounded text-black dark:border-gray-700">Learn more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
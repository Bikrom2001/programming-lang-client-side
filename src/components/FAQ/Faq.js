import React from 'react';

const Faq = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">GLOBAL ONLINE COURSES ABOUT</h2>
            <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                <div>
                    <h3 className="font-semibold uppercase">GLOBAL ONLINE COURSES About </h3>
                    <p className="mt-1 dark:text-gray-400">Our excellent selection of courses has been specifically designed to help industry professionals work with today's best-of-breed automation tools. Our objective is to make our students professional and experienced in what they learn.</p>
                </div>
                <div>
                    <h3 className="font-semibold">Graphics Design with Motion Graphics</h3>
                    <p className="mt-1 dark:text-gray-400">After studying Graphic Design, the opportunity of earning will be immense. You can work as a professional or freelancer and earn handsome. After successfully attending the course, you will be able to use graphic design tools & advanced techniques in a professional way.</p>
                </div>
                <div>
                    <h3 className="font-semibold">Job Placements</h3>
                    <p className="mt-1 dark:text-gray-400">Our recruitment team has significant JOB Placement RECORD for the last 14 years in finding the jobs for our students. Now in Bangladesh PeopleNTech Job Placement Team placing students in some big company in Bangladesh.</p>
                </div>
                <div>
                    <h3 className="font-semibold">Our Courses - Steps to rewarding IT Career</h3>
                    <p className="mt-1 dark:text-gray-400">Our superlative selection of courses has been specifically designed to help industry professionals work with today's best-of-breed automation tools. It is our objective to make our students professional and experienced at what they learn.</p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Faq;
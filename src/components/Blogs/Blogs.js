import React from 'react';

const Blogs = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions & Answers.</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">what is cors?</summary>
                        <div className="px-4 pb-4">
                            <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header-based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Why are you using firebase? What other options do you have to implement authentication?</summary>
                        <div className="px-4 pb-4">
                            <p>Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.
                                Tired of writing boring code for your backend, or can't even write it at all? Try Google Firebase.</p>
                            <p className='mt-3'>
                                what other options do you have to implement authentication without firebase ?
                                <ul>
                                    <li className='list-decimal ml-4 mt-2'><span className='font-bold'>STYTCH</span> is a staunch supporter of password-less authentication. It is focused on improving user experience and cutting developer headaches by doing just that.</li>
                                    <li className='list-decimal ml-4 mt-2'><span className='font-bold'>Ory</span>  brings complete user experience control with its headless user authentication management.</li>
                                    <li className='list-decimal ml-4 mt-2'><span className='font-bold'>Supabase</span> calls itself an open-source Firebase alternative.</li>
                                    <li className='list-decimal ml-4 mt-2'><span className='font-bold'>Okta</span> is again a flagbearer of password-less security. However, you can ask for the strongest passwords with Okta as well.</li>
                                </ul>
                            </p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">How does the private route work?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Protected routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route. For instance, your application can require only logged-in users to be able to visit the dashboard page.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What is Node? How does Node work?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server side of the application. This way javascript is used on both the frontend and back end. Node.js runs on the chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                            
                            <p className='mt-3'>Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. A thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
                        </div>
                    </details>
                </div>
            </div>
            <hr />
        </section>

    );
};

export default Blogs;
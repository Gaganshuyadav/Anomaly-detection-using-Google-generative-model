import React from 'react'
import { Link } from 'react-router'
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const Home = () => {

    //check internet connectivity
    useEffect(() => {
        function checkInternetConnection() {
            return fetch('https://www.google.com', { method: 'HEAD', mode: 'no-cors' })
                .then(() => true)
                .catch(() => false);
        }

        checkInternetConnection().then(isOnline => {
            if (isOnline) {
                toast.success("You are online");
            } else {
                toast.error("You are offline");
            }
        });
    }, []);

    return (
        <>
            {
                <div className="bg-gradient-to-b bg-gray-500  min-h-screen pt-6">
                    {/* Announcement Banner */}
                    <div className="bg-slate-800 text-gray-100 w-[95%] p-8 rounded-2xl shadow-2xl mx-auto">
                        <div className="text-center">
                            <h1 className="text-4xl font-extrabold mt-4 text-indigo-300">
                                Anomaly Detection in NLP Text Data Using ML Techniques
                            </h1>
                            <p className="mt-4 text-lg text-gray-300">
                                Try our analyzer for fast and accurate anomaly detection
                            </p>
                        </div>

                        {/* Creators & Supervisor */}
                        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-8 mt-12">
                            {/* Created By */}
                            <div className="ml-4 md:ml-10">
                                <h2 className="text-2xl font-semibold mb-4 text-indigo-200">Created By :</h2>
                                <div className="grid grid-cols-2 gap-y-2 gap-x-6">
                                    {['Gaganshu Yadav', 'Himani Sharma', 'Deepak', 'Dipanshu Sharma'].map((name) => (
                                        <p key={name} className="text-gray-100 text-lg font-medium">{name}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Supervisor */}
                            <div className="border border-gray-600 bg-slate-700 hover:bg-slate-600 rounded-xl p-6 w-full md:w-80 mt-8 md:mt-0">
                                <h2 className="text-2xl font-semibold mb-2 text-indigo-200">Under Supervision of :</h2>
                                <p className="text-gray-300 text-lg">Mr. Arun Kumar Rai</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <main className="flex flex-col items-center text-center p-10 mt-16">
                        <div className="mt-8 space-x-6">
                            <Link
                                to={"/analysis"}
                                className="px-8 py-3 tracking-wide bg-slate-800 text-white rounded-lg hover:bg-indigo-500 transition duration-300 shadow-md hover:scale-105"
                            >
                                Launch Analyzer
                            </Link>
                            <a
                                href='https://ieeexplore.ieee.org/document/10912228'
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-slate-800 font-semibold text-slate-800 py-3 px-6 rounded-lg hover:bg-indigo-100 transition duration-300 shadow-md hover:scale-105"
                            >
                                Research Paper (IEEE)
                            </a>
                        </div>
                    </main>

                    {/* Footer */}
                    <footer className="bg-slate-800 text-gray-300 text-center p-4 mt-12 rounded-t-lg fixed bottom-0 left-0 w-full">
                        <p>© 2025 Final Year Project</p>
                    </footer>
                </div>


            }

        </>
    )
}

export default Home


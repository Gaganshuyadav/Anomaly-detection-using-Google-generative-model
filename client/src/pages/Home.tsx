import React from 'react'
import { Link } from 'react-router'
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const Home = () => {

    //check internet connectivity
    useEffect(()=>{
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
    },[]);

    return (
        <>
                <div className="relative">
        
                    {/* Announcement Banner */}
                    <div className="bg-gray-300 p-3 text-center">
                        <button className="ml-4 bg-black text-white py-1 px-3 rounded hover:scale-110 trasition duration-300">Gaganshu Yadav</button>
                        <button className="ml-4 bg-black text-white py-1 px-3 rounded hover:scale-110 trasition duration-300">Himani Sharam</button>
                        <button className="ml-4 bg-black text-white py-1 px-3 rounded hover:scale-110 trasition duration-300">Deepak</button>
                        <button className="ml-4 bg-black text-white py-1 px-3 rounded hover:scale-110 trasition duration-300">Dipanshu Sharma</button>
                    </div>
        
                    {/* Main Content */}
                    <main className="flex flex-col items-center text-center p-10 mt-12">
                        <h1 className="text-3xl font-bold mt-10 text-gray-600">Anomaly Detection NLP Text Data Using Advance Machine Learning Techniques</h1>
                        <p className="mt-4 text-lg text-gray-600">Try our analyzer for Anomaly Detection</p>
                        <div className="mt-8 space-x-4">
                            <Link to={"/analysis"} className="px-6 tracking-wider bg-gray-800 text-white py-2  rounded hover:bg-gray-600 trasition duration-300">Analyzer</Link>
                            <a href='https://ieeexplore.ieee.org/document/10912228' className="border border-gray-700 font-semibold text-gray-700 py-2 px-4 rounded hover:bg-black hover:text-white hover:scale-110 trasition duration-300">Research Paper In IEEE</a>
                        </div>
                    </main>
        
                    {/* Footer Section */}
                    <footer className="bg-gray-800 text-white text-center p-4 fixed bottom-0 w-full">
                        <p>©2025 Final Year Project</p>
                    </footer>
                </div>
                </>
    )
}

export default Home


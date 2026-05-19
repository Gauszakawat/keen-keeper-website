import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

const Four = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center">

                <div className="flex justify-center mb-6">
                    <div className="bg-red-100 p-5 rounded-full">
                        <FaExclamationTriangle className="text-5xl text-red-500" />
                    </div>
                </div>

                <h1 className="text-7xl font-extrabold text-gray-800 mb-3">
                    404
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
                    Page Not Found
                </h2>

                <p className="text-gray-500 mb-8 leading-relaxed">
                    আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
                    হয়তো পেজটি সরিয়ে ফেলা হয়েছে অথবা ভুল URL ব্যবহার করা হয়েছে।
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 duration-300"
                >
                    <FaHome />
                    Back To Home
                </Link>

            </div>

        </div>
    );
};

export default Four;
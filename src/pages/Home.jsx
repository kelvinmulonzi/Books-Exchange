import React from 'react'


function Home() {  
return (
    <div className="bg-cover bg-center" style={{ backgroundImage: 'url(/assets/images/Mybooks.jpg)'}}>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-opacity-75">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Books Exchange</h1>
            <p className="text-lg text-gray-600 mb-8">Exchange your books with others easily and quickly</p>
            <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Get Started
            </button>
        </div>
    </div>
)
}

export default Home
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
 
  return (
      <div className="min-h-screen flex flex-col">
        <header className="bg-blue-300 min-h-48 sm:min-h-72 text-white text-2xl sm:text-4xl font-bold p-4 flex justify-center items-center text-center"> 
        <h1>Zytai's Group</h1>
      </header>
      <main className="flex-1 px-4 py-8 sm:px-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto text-center">
          <div className="text-xl sm:text-2xl font-bold">
            <Link to="/pastries" className="text-blue-500 hover:text-blue-700 block h-full">
              <div className="bg-blue-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 min-h-48 sm:min-h-64 flex items-center justify-center">
               Go to Pastries Page
              </div>
            </Link>
          </div>
          <div className="text-xl sm:text-2xl font-bold">
            <Link to="/greener-pastures" className="text-blue-500 hover:text-blue-700 block h-full">
            <div className="bg-blue-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 min-h-48 sm:min-h-64 flex items-center justify-center">
              Go to Greeners Page
            </div>
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-blue-300 text-white text-center text-sm sm:text-base p-4">
        <p>&copy; 2026 Zytai's Group. All rights reserved.</p>
      </footer>
    </div>
  )
}

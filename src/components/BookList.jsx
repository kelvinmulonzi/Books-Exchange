import React from 'react'

function BookList() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-8">Book List</h1>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-200 p-4">
          <img src="" alt="Book Title" className="w-full h-auto mb-4" />
            <h2 className="font-bold text-lg">Book Title</h2>
            <p className="text-sm">Author</p>
            <p className="text-sm">Genre</p>
            <p className="text-sm">Year</p>
            <p className="text-sm">Description</p>
          </div>
          
          <div className="bg-gray-200 p-4">
          <img src="" alt="Book Title" className="w-full h-auto mb-4" />
            <h2 className="font-bold text-lg">Book Title</h2>
            <p className="text-sm">Author</p>
            <p className="text-sm">Genre</p>
            <p className="text-sm">Year</p>
            <p className="text-sm">Description</p>
          </div>
          <div className="bg-gray-200 p-4">
          <img src="" alt="Book Title" className="w-full h-auto mb-4" />
            <h2 className="font-bold text-lg">Book Title</h2>
            <p className="text-sm">Author</p>
            <p className="text-sm">Genre</p>
            <p className="text-sm">Year</p>
            <p className="text-sm">Description</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookList
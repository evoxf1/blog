import React from 'react';

function Jobs() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Jobs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Job 1</h3>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Job 2</h3>
          <p className="text-sm">Nulla euismod felis sed mauris tincidunt aliquam.</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Job 3</h3>
          <p className="text-sm">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
        <div className="bg-purple-500 text-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Job 4</h3>
          <p className="text-sm">Fusce eu justo nec metus fringilla tincidunt a sit amet odio.</p>
        </div>
        <div className="bg-indigo-500 text-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Job 5</h3>
          <p className="text-sm">Vestibulum malesuada eros ut urna placerat, eu elementum erat volutpat.</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Job 6</h3>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-pink-500 text-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Job 7</h3>
          <p className="text-sm">Nulla euismod felis sed mauris tincidunt aliquam.</p>
        </div>
        <div className="bg-teal-500 text-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Job 8</h3>
          <p className="text-sm">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
        <div className="bg-orange-500 text-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Job 9</h3>
          <p className="text-sm">Fusce eu justo nec metus fringilla tincidunt a sit amet odio.</p>
        </div>
        <div className="bg-gray-500 text-white p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Job 10</h3>
          <p className="text-sm">Vestibulum malesuada eros ut urna placerat, eu elementum erat volutpat.</p>
        </div>
      </div>
    </div>
  );
}

export default Jobs;

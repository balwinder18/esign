
import React from 'react';



const Navbar = () => {
  
  
  

  return (
    <nav className="bg-[#dadada] p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex justify-between items-center space-x-4">
          <a href="/" className="text-black text-2xl font-bold">SIgnaturefree</a>
          
          {/* Home Dropdown */}
          {/* <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Home
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Dashboard</a>
                <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Profile</a>
                <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Settings</a>
              </div>
            )}
          </div>
        </div> */}

        {/* Right Side: Search Button */}
        {/* <div className="relative">
        <Button variant="outline" className='mr-5'>SignIn</Button>
        <Button variant="outline">FreeTrial</Button> */}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

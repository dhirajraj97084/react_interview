import { useState } from "react";
import LogOut from "../../pages/registration/LogOut";
import Login from "../../pages/registration/Login";

function Navbar({className}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin,setLogin]=useState(true);

  return (
    <nav className="bg-blue-600 p-4 text-white top-0 sticky">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Store</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
           <li><a href="/usestate" className="hover:text-gray-300">UseState</a></li>
          <li><a href="/electronics" className="hover:text-gray-300">Electronics</a></li>
          <li><a href="/clothes" className="hover:text-gray-300">Clothes</a></li>
          {isLogin?<LogOut className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition" />:<Login className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition"/>}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-blue-700 p-4 space-y-4">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
           <li><a href="/usestate" className="hover:text-gray-300">UseState</a></li>
           <li><a href="/electronics" className="hover:text-gray-300">Electronics</a></li>
          <li><a href="/clothes" className="hover:text-gray-300">Clothes</a></li>
          {isLogin?<LogOut className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition" />:<Login className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition"/>}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;

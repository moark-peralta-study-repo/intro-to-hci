import { Link } from 'react-router-dom';
import { HomeIcon, MenuIcon, UserIcon } from 'lucide-react';
const Navbar = () => {
  return <nav className="bg-white shadow-sm py-4 px-6 md:px-10 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <div className="bg-rose-500 p-1.5 rounded-md">
          <HomeIcon className="h-5 w-5 text-white" />
        </div>
        <span className="font-bold text-rose-500 text-xl">AirHost</span>
      </Link>
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <Link to="/listings" className="text-gray-600 hover:text-gray-900">
          Listings
        </Link>
        <Link to="/profile" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
          <UserIcon className="h-4 w-4" />
          Profile
        </Link>
      </div>
      <div className="md:hidden">
        <button className="text-gray-500">
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
    </nav>;
};
export default Navbar;
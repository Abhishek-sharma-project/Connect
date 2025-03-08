import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaUserLarge } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-3xl font-bold text-blue-600">
        Connect
      </Link>
      <div className="flex items-center gap-6">
        <Link to="/" className="text-gray-700 text-xl">
          <AiFillHome size={21} className="mx-3" />
          Home
        </Link>
        <Link to="/profile" className="text-gray-700 text-xl px-2">
          <FaUserLarge size={20} className="mx-3" />
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

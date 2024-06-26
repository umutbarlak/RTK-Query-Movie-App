import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#101827] border-b shadow shadow-gray-100 text-[#f2e9e4] flex justify-between p-5 lg:px-10">
      <Link
        className="text-3xl font-bold hover:scale-110 transition-transform"
        to="/"
      >
        MOVIES
      </Link>

      <Link
        className="flex items-center gap-3 font-semibold text-xl hover:text-red-500 underline-offset-2 transition-transform "
        to="/favorites"
      >
        <FaHeart />
        Favorites
      </Link>
    </header>
  );
};

export default Header;

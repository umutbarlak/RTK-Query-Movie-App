import { Link } from "react-router-dom";
import LikeBtn from "../LikeBtn";
import { movieType } from "../../types";
import { baseImgUrl } from "../../constants";

type CardProps = {
  movie: movieType;
};

const Card = ({ movie }: CardProps) => {
  return (
    <div className="relative p-4 shadow-xl rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-105 group bg-gray-800 hover:bg-gray-700">
      <Link to={`/movie/${movie.id}`} className="block">
        <img
          className="rounded-lg w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
          src={baseImgUrl + movie.poster_path}
          alt={movie.original_title}
          loading="lazy"
        />
      </Link>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-4 rounded-b-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h2 className="text-lg font-bold text-white line-clamp-2 mb-2">
          {movie.original_title}
        </h2>
        <LikeBtn color="text-white" id={movie.id} />
      </div>
    </div>
  );
};

export default Card;

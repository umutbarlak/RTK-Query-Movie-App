import {
  useAddToFavoriteMutation,
  useGetFavoritesQuery,
} from "../../redux/api";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Loader from "../Loader";

const LikeBtn = ({ id, color }: { id?: number; color?: string }) => {
  const favState = useGetFavoritesQuery();

  console.log(favState);

  const isLiked = favState.data?.results.find((i) => i.id === id);

  const [addToFavorite, { isLoading }] = useAddToFavoriteMutation();

  const handleLike = () => {
    addToFavorite({
      media_id: id || 1,
      media_type: "movie",
      favorite: isLiked ? false : true,
    });
  };

  return (
    <div className="flex ">
      <button
        className={` text-2xl flex  ${color} `}
        disabled={isLoading}
        onClick={handleLike}
      >
        {isLoading ? (
          <Loader type="xs" />
        ) : isLiked ? (
          <FaHeart color="#DC2626" />
        ) : (
          <FaRegHeart />
        )}
      </button>
    </div>
  );
};

export default LikeBtn;

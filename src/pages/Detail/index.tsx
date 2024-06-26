import { useGetDetailQuery } from "../../redux/api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { Link, useParams } from "react-router-dom";
import { baseImgUrl } from "../../constants";
import { IoIosArrowBack } from "react-icons/io";
import ItemList from "./ItemList";
import LikeBtn from "../../components/LikeBtn";

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetDetailQuery(id);

  return (
    <div className="max-w-7xl mx-auto p-4 bg-gray-900 text-white">
      <div className="flex justify-between items-center mb-10">
        <Link
          to="/"
          className="flex items-center justify-center text-center gap-2  border border-white hover:border-red-600 rounded p-1 px-3 w-fit hover:bg-red-600 text-white transition duration-300"
        >
          <IoIosArrowBack />
          Back
        </Link>
        <LikeBtn color="text-white" id={id ? +id : 1} />
      </div>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error data={error} />
      ) : (
        data && (
          <div className="flex flex-col md:text-center">
            <img
              className="mb-5 w-full lg:mb-16 max-h-[70vh] object-cover rounded-lg shadow-lg"
              src={baseImgUrl + data.backdrop_path}
              alt={data.title}
            />
            <h1 className="text-3xl font-bold mb-5 text-red-500">
              {data.title}
            </h1>
            <div className="flex gap-3 text-xl md:justify-center flex-wrap">
              {data.genres.map((genre) => (
                <p
                  key={genre.id}
                  className="md:text-center p-2 bg-gray-700 text-red-500 rounded-md shadow-md"
                >
                  {genre.name}
                </p>
              ))}
            </div>
            <p className="text-xl my-4 md:text-center">{data.tagline}</p>
            <p className="my-2 md:text-center text-gray-300">{data.overview}</p>
            <h2 className="font-semibold md:text-center my-2 text-2xl">
              Production Information
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-4">
              <ItemList data={data.production_companies} />
              <ItemList data={data.spoken_languages} />
              <ItemList data={data.production_countries} />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Detail;

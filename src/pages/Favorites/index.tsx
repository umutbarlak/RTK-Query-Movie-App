import { useGetFavoritesQuery } from "../../redux/api";
import { movieType } from "../../types";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Card from "../../components/Card";

const Favorites = () => {
  const { isLoading, error, data } = useGetFavoritesQuery();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5 text-[#f2e9e4] ">Favorites</h1>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error data={error} />
      ) : (
        data && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {data.results.map((movie: movieType, key: number) => (
              <div key={key} className="col">
                <Card movie={movie} key={key} />
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Favorites;

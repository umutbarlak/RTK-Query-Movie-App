import { useGetMoviesQuery } from "../../redux/api";
import Card from "../Card";
import Error from "../Error";
import Loader from "../Loader";
import { movieType } from "../../types";

type PropsType = {
  endpoint: string;
  title: string;
};

const MovieList = ({ endpoint, title }: PropsType) => {
  const { data, isLoading, error } = useGetMoviesQuery(endpoint);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error data={error} />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5 text-[#f2e9e4] ">{title}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data?.results.map((movie: movieType, key: number) => (
          <Card movie={movie} key={key} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

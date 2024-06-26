import MovieList from "../../components/MovieList";
import { movieCategories } from "../../constants";

const Home = () => {
  return (
    <div className="flex flex-col gap-20 bg-[#101827]">
      {movieCategories.map((category, index) => (
        <MovieList
          key={index}
          title={category.title}
          endpoint={category.endpoint}
        />
      ))}
    </div>
  );
};

export default Home;

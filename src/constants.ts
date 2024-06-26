import { MovieCategory } from "./types";

export const baseImgUrl = "https://image.tmdb.org/t/p/original";

export const movieCategories: MovieCategory[] = [
  { title: "Populars", endpoint: "/movie/popular" },
  { title: "Top Rated", endpoint: "/movie/top_rated" },
  { title: "Trending", endpoint: "/trending/movie/day" },
];

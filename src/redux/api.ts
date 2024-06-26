import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MovieDetailType, MediaBodyType, ApiResponseType } from "../types";

const apiKey = import.meta.env.VITE_API_KEY as string;

export const MovieApi = createApi({
  reducerPath: "MovieApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  }),

  tagTypes: ["Movies", "Favorites"],

  endpoints: (builder) => ({
    getMovies: builder.query<ApiResponseType, string>({
      query: (url) => url,
    }),

    getDetail: builder.query<MovieDetailType, string | undefined>({
      query: (id) => `/movie/${id}`,
    }),

    addToFavorite: builder.mutation<string, MediaBodyType>({
      query: (body: MediaBodyType) => ({
        url: "/account/21021059/favorite",
        method: "POST",
        body: JSON.stringify(body),
      }),
      invalidatesTags: ["Favorites"],
    }),

    getFavorites: builder.query<ApiResponseType, void>({
      query: () => "/account/21021059/favorite/movies",
      providesTags: ["Favorites"],
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useAddToFavoriteMutation,
  useGetFavoritesQuery,
  useGetDetailQuery,
} = MovieApi;

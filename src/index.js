import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import MovieReviewPage from "./pages/movieReviewPage";

import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW

import WatchListPage from "./pages/watchListPage";

import SiteHeader from './components/siteHeader'
import {Link} from 'react-router-dom'
import UpcomingMovies from "./pages/upcomingMoviesPage";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

import MoviesContextProvider from "./contexts/moviesContext";

import AddMovieReviewPage from './pages/addMovieReviewPage'

//top rated
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";

//tvshow//
import TVShowPage from "./pages/tvShowPage";
import TVShowDetailsPage from "./pages/tvShowDetailsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader />      {/* New Header  */} 
      <MoviesContextProvider>
      <Routes>
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route exact path="/watchList" element={<WatchListPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/movies/upcoming" element={<UpcomingMovies/>}  />
        <Route path="/movies/topRated" element={<TopRatedMoviesPage/>}  />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/tvshows" element ={<TVShowPage/>} />
        <Route path="tvshows/:id" element={<TVShowDetailsPage/>}/>
        
      </Routes>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );
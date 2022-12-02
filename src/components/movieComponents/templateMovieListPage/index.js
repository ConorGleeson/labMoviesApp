import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import { QueryClient } from "react-query"; // found to refresh page might solve problem with sort not refreshing

//pagination
import MovieFooter from "../footerMovie";
import { MoviesContext } from "../../../contexts/moviesContext";
import  Box  from "@mui/material/Box";


export var sortMovieBy="popularity.desc"; //default value for sort

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [sortMovie, setSortMovie] = useState(""); //based off above
  const genreId = Number(genreFilter);
  const {pageNumber} = useState(MoviesContext)
 

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
    if  (type === "sort") {
      setSortMovie(value);
      sortMovieBy=value;
      QueryClient.refetchQueries();
    }
  };

  return (
    <>
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            sortMovie = {sortMovie}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
      {/* pagination grid */}
      
    </Grid>
    
    <Grid   item xs = {5} style = {{paddingTop: 20}}>
    <Box display = "flex"
    justifyContent = "center"
    alignItems = "center"
    >
      <MovieFooter title = {pageNumber}/>
    </Box>
  </Grid>
  </>
  );
}
export default MovieListPageTemplate;
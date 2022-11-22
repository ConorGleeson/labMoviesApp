import React from "react";
import { useParams } from 'react-router-dom';
import TVShowDetails from "../components/tvShowComponents/tvShowDetails/";
import PageTemplate from "../components/movieComponents/templateMoviePage";
//import useMovie from "../hooks/useMovie";

import { getTVShow } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'



const TVShowDetailsPage = (props) => {
  const { id } = useParams();

  const { data: show, error, isLoading, isError } = useQuery(
    ["show", { id: id }],
    getTVShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {show ? (
        <>
          <PageTemplate show={show}>
            <TVShowDetails show={show} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for show details</p>
      )}
    </>
  );
};

export default TVShowDetailsPage;
import React, { useState } from "react";

export const TVShowContext = React.createContext(null);

const TVShowProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favourites, setFavourites] = useState( [] )
  //const [watchList, setWatchList] = useState( [] )
  

  const addToFavourites = (show) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(show.id)) {
      newFavourites.push(show.id);
    }
    setFavourites(newFavourites);
  };

//   const addToWatchList = (movie) => {
//     let newWatchList = [...watchList];
//     if (!watchList.includes(movie.id)) {
//       newWatchList.push(movie.id);
//     }
//     setWatchList(newWatchList);
//   };


  const addReview = (show, review) => {
    setMyReviews( {...myReviews, [show.id]: review } )
  };


  // We will use this function in a later section
  const removeFromFavourites = (show) => {
    setFavourites( favourites.filter(
      (mId) => mId !== show.id
    ) )
  };

 return (
    <TVShowContext.Provider
      value={{
        favourites,
        // watchList,
        // addToWatchList,
        addToFavourites,
        removeFromFavourites,
        addReview,
      }}
    >
      {props.children}
    </TVShowContext.Provider>
  );
};

export default TVShowProvider;
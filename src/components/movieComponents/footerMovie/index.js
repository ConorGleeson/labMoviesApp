import React, { useContext } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

//pagination
import Pagination from '@mui/material/Pagination';
import { MoviesContext } from "../../../contexts/moviesContext";

const MovieFooter = (props) => {
const {pageNumber} = useContext(MoviesContext)
  const navigate = useNavigate();

  const setPageNum = (newNumber) =>{
    const num = parseInt(pageNumber) + parseInt(newNumber)
     if(num <= 0 ) return; 

    // console.log(`--${pageNumber} + ${pageNum}`)
    navigate(`/${num}`, {replace:true})
  }

  return (
    <Paper 
        component="div" 
        sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: 1.5,
            margin: 0,
        }}
      >
      <IconButton aria-label="go back" onClick={() => setPageNum(-1)} >
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>
      


      <IconButton aria-label="go forward" onClick={() => setPageNum(+1) } >
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieFooter;
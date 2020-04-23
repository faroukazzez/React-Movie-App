import React from "react";
import MovieRating from './MovieRating'

const MovieCard = (props) => {
  return (
    
    <div className="card">
      <img src={props.movie.imgUrl} className="card-img-top" alt="" />
      <div className="card-body">
        <h3 className="card-title">{props.movie.filmName}</h3>
        <p className="card-text">  <MovieRating userRating={props.movie.rating} handleRate={()=>{}}/> </p>
      </div>
    </div>
  );
};

export default MovieCard;

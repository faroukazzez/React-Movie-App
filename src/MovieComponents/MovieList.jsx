import React, { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map((e) => (
          <MovieCard movie={e} />
        ))}
      </div>
    );
  }
}

export default MovieList;

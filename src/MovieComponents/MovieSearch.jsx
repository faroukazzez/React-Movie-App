import React, { Component } from "react";
import MovieRating from "./MovieRating";
import "./MovieMain.css";

class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  
  }
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="input-group m-3">
            <input
              type="text"
              className="form-control"
              placeholder="search Movie"
              onChange={(e) => this.props.handleSearch(e.target.value)}
            />
            <MovieRating handleRate={r=>this.props.handleRate(r)} userRating={this.props.userRating}/>
          </div>
        </div>
      </div>
    );
  };
}

export default MovieSearch;

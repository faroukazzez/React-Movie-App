import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import MovieList from "./MovieComponents/MovieList";
import AddMovie from "./MovieComponents/AddMovie";
import MovieSearch from "./MovieComponents/MovieSearch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: "",
      userRating: 1,
      filmList: [
        {
          filmName: "Game Of Thrones",
          rating: 5,
          imgUrl:
            "https://image.tmdb.org/t/p/w500/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg",
          id: uuidv4(),
        },
        {
          filmName: "Peaky Blinders",
          rating: 5,
          imgUrl:
            "https://image.tmdb.org/t/p/w500/jeWoeUQyHdxGFNZCrzbOUP78FiZ.jpg",
          id: uuidv4(),
        },
        {
          filmName: "Breaking Bad",
          rating: 4,
          imgUrl:
            "https://image.tmdb.org/t/p/w500/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg",
          id: uuidv4(),
        },
        {
          filmName: "Sherlock",
          rating: 3,
          imgUrl:
            "https://image.tmdb.org/t/p/w500/f9zGxLHGyQB10cMDZNY5ZcGKhZi.jpg",
          id: uuidv4(),
        },
        {
          filmName: "Shernobyl",
          rating: 2,
          imgUrl:
            "https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
          id: uuidv4(),
        },
        {
          filmName: "Friends",
          rating: 1,
          imgUrl:
            "https://image.tmdb.org/t/p/w500/7buCWBTpiPrCF5Lt023dSC60rgS.jpg",
          id: uuidv4(),
        },
        {
          filmName: "Vikings",
          rating: 1,
          imgUrl:
            "https://image.tmdb.org/t/p/w500/94gP9uXNdbypwCLORjeurlad15Z.jpg",
          id: uuidv4(),
        },
      ],
    };
  }
  handleSearch = (search) => {
    this.setState({
      userSearch: search,
    });
  };
  handleRate = (rate) => {
    this.setState({
      userRating: rate,
    });
  };
  add = (newmovie) => {
    this.setState({
      filmList: [...this.state.filmList, newmovie],
    });
  };
  render() {
    return (
      <div className="App">
        <h1> Movie App </h1>
        <MovieSearch
          handleSearch={(s) => this.handleSearch(s)}
          handleRate={(r) => this.handleRate(r)}
          userRating={this.state.userRating}
        />
        <MovieList
          movies={this.state.filmList.filter(
            (el) =>
              el.filmName.toLowerCase().includes(this.state.userSearch) &&
              el.rating >= this.state.userRating
          )}
        />

        <AddMovie add={(m) => this.add(m)} />
      </div>
    );
  }
}

export default App;

import React from "react";
import SlideShow from "../../components/slideShow";
import MovieBlock from "../../components/MovieComponents/MovieBlock/MovieBlock";
class HomePage extends React.Component {
  render() {
    return (
      <div className="homePage">
        <SlideShow />
        <div className="main-content">
          <MovieBlock />
        </div>
      </div>
    );
  }
}

export default HomePage;

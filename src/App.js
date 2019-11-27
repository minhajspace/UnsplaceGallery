import React from "react";
import ImagesList from "./components/images";
import unsplash from "./Api/unsplash";
import Search from "./Search";

class App extends React.Component {
  state = { images: [] };
  onFormSubmit = async inputValue => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: inputValue }
      }
    );
    // .then(response => {
    //   console.log(response.data.results);
    // });
    this.setState({ images: response.data.results });
    // console.log(this.state.images);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Search onSubmit={this.onFormSubmit} />
        {/* found : {this.state.images.length} images */}
        <ImagesList images={this.state.images} />
      </div>
    );
  }
}

export default App;

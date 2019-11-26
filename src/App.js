import React from "react";
import axios from "axios";
import Search from "./Search";

class App extends React.Component {
  onFormSubmit(inputValue) {
    console.log({ inputValue });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Search onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;

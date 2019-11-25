import React from "react";
import Search from "./Search";

class App extends React.Component {
  onFromSubmit(inputValue) {}
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Search onSubmit={this.onFromSubmit} />
      </div>
    );
  }
}

export default App;

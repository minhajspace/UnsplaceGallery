import React from "react";

class Search extends React.Component {
  state = { term: "" };

  render() {
    return (
      <div className="ui segment">
        <from className=" ui form">
          <div className="field">
            <lable> Image Search </lable>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </from>
      </div>
    );
  }
}
export default Search;

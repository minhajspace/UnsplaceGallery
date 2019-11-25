import React from "react";

class Search extends React.Component {
  state = {
    inputValue: " "
  };

  onChange = event => {
    this.setState({ inputValue: event.target.value });
  };
  onFormSubmit(event) {
    event.prevent.defaut();

    this.props.onSubmit(this.state.inputValue);
  }

  render() {
    return (
      <div className=" ui segment">
        <from className="ui form " onSubmit={this.onFormSubmit}>
          <div className="field">
            <lable className="">Image Search</lable>
            <input
              className=""
              type="text"
              value={this.state.inputValue}
              onChange={this.onChange}
            />
          </div>
        </from>
      </div>
    );
  }
}

//{

//   state = { term: " " };

//   onFromSubmit = event => {
//     event.preventDefault();
//   };

//   render() {
//     return (
//       <div className="ui segment">
//         <from className=" ui form" onSubmit={this.onFromSubmit}>
//           <div className="field">
//             <lable> Image Search </lable>
//             <input
//               type="text"
//               value={this.state.term}
//               onChange={event => this.setState({ term: event.target.value })}
//             />
//           </div>
//         </from>
//       </div>
//     );
//   }
// }
export default Search;

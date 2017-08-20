import React, { Component } from 'react';

// const SearchBar = () => {   // functional component
//   return <input />;
// };

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term:'hi' };
  }
  render() {
    return (
      <div>
      <input
      onChange={event => this.setState({term: event.target.value})}/>
      </div>
    );
  }
}


export default SearchBar;

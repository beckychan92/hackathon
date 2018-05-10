import React, { Component } from 'react';
import { textarea } from 'react-materialize';
// import _ from 'lodash';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
    this.inputChange = this.inputChange.bind(this);
    // this.termSearch = this.termSearch.bind(this)
  }
  inputChange(e) {
    this.setState({
      term: e.target.value
    })
    console.log('inside search ', this.state)
    this.props.onSearch(this.state.term)
  }



  render() {
    
    return (
      <div className="input">
        <textarea 
          placeholder="Search..." 
          onChange={this.inputChange}

        s={6} />
      </div>
    );
  }
}

export default Search;
import React, { Component } from 'react';
import { textarea } from 'react-materialize';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
    this.inputChange = this.inputChange.bind(this);
  }
  inputChange(e) {
    // if(e.keyCode === 8) {
      console.log('ic', e, e.key, e.keyCode, e.charCode)
    // }
    // var key = e.which || e.keyCode || e.charCode;

   

    this.setState({
      term: e.target.value
    })
    this.props.onSearch(e.target.value)
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
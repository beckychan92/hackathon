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
    this.termSearch = this.termSearch.bind(this)
  }
  inputChange(e){
    if(e.target.value === undefined) {
      return (<div>Loading...</div>)
    }
    this.setState({term: e.target.value});
    console.log('input change', this.state.term)

    this.termSearch(this.state.term)
  }

  termSearch(term) {
    var meetUpData = this.props.meetupListData;
    //filter based on search
    var filterData = meetUpData.filter(meetUp => {
      //note includes is case sensitive
      return meetUp.title.includes(term)
    })
    console.log('filter', filterData)
    //have data here. 
    return filterData;
    
  }





  render() {
    return (
      <div className="input">
        <textarea placeholder="Search..." onChange={this.props.onSearch(this.inputChange)} 
        s={6} />
      </div>
    );
  }
}

export default Search;
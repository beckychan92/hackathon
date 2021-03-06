import React, { Component } from 'react';
import {Button, Icon, Navbar, NavItem, Row, Col, Card, CardTitle, Collection, CollectionItem} from 'react-materialize'

import Search from './components/search.js';
import logo from './logo.svg';
import './App.css';
import { lstatSync } from 'fs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meetupListData: [
        {
          key: 1234131231237,
          title: "Korea azure day",
          img: "https://s3.ap-northeast-2.amazonaws.com/festa-temp/saturday-azure-live-1805-images/saturday-azure-live-1805-cover.png"
          
        }, {
          key: 1234134231237,
          title: "F8 hackathon",
          img: "https://s3.ap-northeast-2.amazonaws.com/festa-temp/django-girls-images/django-girls-cover.png"
          
        }, {
          key: 3243134231237,
          title: "American Red Cross",
          img: "https://upload.wikimedia.org/wikipedia/en/7/7f/American_Red_Cross_logo.svg"
        }, {
          key: 3244313231299,
          title: "Meals on Wheels",
          img: "https://betterlivesleeds.files.wordpress.com/2016/11/mowlogo.jpg?w=640&h=320"
          
        }
      ]
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  //problem.  filter list reduce and while typing but 
  // when backspace, the set of data disappears 

  //problem we overwrite the state 

  handleSearch(e) {
    
    const meetupListData = this.state.meetupListData;
    
    console.log('inside app ', e)
    e = e.toLowerCase();
    



    var filterData = meetupListData.filter(meetup => {
      if(meetup.title.toLowerCase().includes(e)){
        return meetup
      }
    })

    console.log(filterData)

    
  
    this.setState({
      meetupListData: filterData
    })
  }



  render() {
    var { meetupListData } = this.state;

    return (
      <div className="App">
        <Navbar brand='Helpies' right>
          <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
        </Navbar>
      <Search 
        meetupListData={this.state.meetupListData} 
        onSearch={this.handleSearch.bind(this)}
      />
      
      
      <Row>
        <Col s={7} className='grid-example'>
          <Card className='card large'
            header={<CardTitle image='https://s3.ap-northeast-2.amazonaws.com/festa-temp/saturday-azure-live-1805-images/saturday-azure-live-1805-cover.png'></CardTitle>}

            actions={[<a href="https://www.facebook.com/askHelpies">Facebook Page</a>]}>
              <p>Please feel free to visit our Facebook Page to learn more about us</p>
          </Card>
        </Col>

        <Col s={5} className='grid-example'>
        <Collection>
          {
            meetupListData.map(meetup => {
              return (
                <div className="card tiny" key={meetup.key}>
                  <CollectionItem className="card horizontal" >{meetup.title}
                    <div className="card-image">
                      <img src={meetup.img} />
                    </div>
                  </CollectionItem>
                </div>
              )
               
            })
          }
        </Collection>
        </Col>

      </Row>
      </div>
    );
  }
}

export default App;

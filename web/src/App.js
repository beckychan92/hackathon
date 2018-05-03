import React, { Component } from 'react';
import {Button, Icon, Navbar, NavItem, Row, Col, Card, CardTitle, Collection, CollectionItem} from 'react-materialize'

import Search from './components/search.js'

import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meetupListData: [
        {
          title: "Korea azure day",
          img: "https://s3.ap-northeast-2.amazonaws.com/festa-temp/saturday-azure-live-1805-images/saturday-azure-live-1805-cover.png"
        }, {
          title: "F8 hackathon",
          img: "https://s3.ap-northeast-2.amazonaws.com/festa-temp/django-girls-images/django-girls-cover.png"
        }
      ]
    }
  }

  render() {
    const { meetupListData } = this.state;
    return (
      <div className="App">
        <Navbar brand='Helpies' right>
        <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
        <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
      </Navbar>
      <Search />
      <Row>
        <Col s={7} className='grid-example'>
        <Card className='small'
          header={<CardTitle image='https://s3.ap-northeast-2.amazonaws.com/festa-temp/saturday-azure-live-1805-images/saturday-azure-live-1805-cover.png'>Card Title</CardTitle>}
          actions={[<a href='#'>This is a Link</a>]}>
          I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
        </Card>
        </Col>
        <Col s={5} className='grid-example'>
        <Collection>
          {
            meetupListData.map(meetup => {
              return <CollectionItem>{meetup.title}</CollectionItem>
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

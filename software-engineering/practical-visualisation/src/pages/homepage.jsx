import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import TitleContainer from '../components/title-container'
import Card from '../components/chart-card'
import Data from '../backend/testStats.json'

class HomePage extends Component {

  render() {
    return (
      <div className="container-fluid">
           <TitleContainer
             title="Welcome to my Github Language Visualiser!"
             subtitle="A web app to visualise various stats about the languages you've used :)"
           ></TitleContainer>
           <div className="container-fluid">
           <Card
           title="Test Graph"
           history={this.props.history}
           graph="test"
           data={Data}
           fullscreen="/fullscreenPie"
          />
          <Card
           title="Test Graph"
           history={this.props.history}
           graph="test"
           data={Data}
           fullscreen="/fullscreenPie"
          />
          </div>
      </div>
    )
  }
}

export default HomePage

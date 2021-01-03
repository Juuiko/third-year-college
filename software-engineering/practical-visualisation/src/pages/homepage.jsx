import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import TitleContainer from '../components/title-container'

class HomePage extends Component {

  render() {
    return (
      <div className="container-fluid">
           <TitleContainer
             title="Welcome to my Github Language Visualiser!"
             subtitle="A web app to visualise various stats about the languages you've used :)"
           ></TitleContainer>
      </div>
    )
  }
}

export default HomePage

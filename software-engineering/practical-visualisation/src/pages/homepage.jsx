import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import TitleContainer from '../components/title-container'
import Bar from '../components/navbar'

class HomePage extends Component {

  render() {
    return (
      <div className="container-fluid" style={{ height: "100vh" }}>
           <Bar text="home" />
           <TitleContainer
             title="Welcome to my Github Language Visualiser!"
             subtitle="A web app to visualise various stats about the languages you've used in Github"
           ></TitleContainer>
      </div>
    )
  }
}

export default HomePage

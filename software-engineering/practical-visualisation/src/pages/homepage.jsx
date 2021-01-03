import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form,FormControl,Button,Nav,Navbar} from 'react-bootstrap';

import TitleContainer from '../components/title-container'
import '../stylesheets/homepage.css';

class HomePage extends Component {

  render() {
    return (
      <div className="container-fluid">
            <Navbar bg="light" expand="lg">
             <Navbar.Brand><Link to="/">Github Vis</Link></Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
               </Nav>
               <Form inline>
                 <FormControl type="text" placeholder="Github username" className="mr-sm-2" />
                 <Button variant="outline-info"><Link to="/juuiko">Search</Link></Button>
               </Form>
             </Navbar.Collapse>
           </Navbar>
           <TitleContainer
             title="Welcome to my Github Language Visualiser!"
             subtitle="A web app to visualise various stats about the languages you've used in Github"
           ></TitleContainer>
      </div>
    )
  }
}

export default HomePage

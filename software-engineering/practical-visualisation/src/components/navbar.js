import React from 'react'
import { Link } from 'react-router-dom'

import {Form,FormControl,Button,Nav,Navbar} from 'react-bootstrap';


class NavBar extends React.Component {

    state = {
        searchText: ""
    };
    
    handleSearchInput = event => {
    this.setState({
        searchText: event.target.value
    });
    };

    render() {
        return(
                <div className="container-fluid">
                     <Navbar bg="light" expand="lg">
                     <Navbar.Brand><Link to="/">Github Vis</Link></Navbar.Brand>
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="mr-auto">
                     </Nav>
                     <Form inline>
                         <FormControl
                         onChange={this.handleSearchInput}
                         value={this.state.searchText}
                         type="text"
                         placeholder="Github username"
                         className="mr-sm-2"
                         />
                         <Button 
                             onClick={this.handleSearchSubmit}
                             variant="outline-info">
                             <Link to={{
                                 pathname: "/user",
                                 searchText: this.state.searchText
                             }}>
                             Search</Link>
                         </Button>
                     </Form>
                     </Navbar.Collapse>
                 </Navbar>
                </div>
        )
    }
}

export default NavBar

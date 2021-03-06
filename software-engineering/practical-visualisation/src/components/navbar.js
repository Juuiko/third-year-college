import React from 'react'
import { Link } from 'react-router-dom'

import {Form,FormControl,Button,Nav,Navbar} from 'react-bootstrap';


class NavBar extends React.Component {

    constructor(props) {
        super()
    }

    state = {
        searchText: "",
        navBarText: " "
    };

    handleSearchInput = event => {
    this.setState({
        searchText: event.target.value
    });
    };

    handleKeyPress(target) {
        if(target.charCode === 13) {
            target.preventDefault();
        }
      }

    render() {
        let barText;
        if (this.props.text === ""){
            barText = "error: please entre a username"
        } else if (this.props.text === "home"){
            barText = "home"
        } else {
            barText = this.props.text + "'s profile"
        }

        return(
                <div className="container-fluid">
                     <Navbar bg="light" expand="lg">
                     <Navbar.Brand><Link to="/">GLV</Link></Navbar.Brand>
                     <Navbar.Text>{barText}</Navbar.Text>
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
                         onKeyPress={(e) => this.handleKeyPress(e)}
                         />
                        <Link to={{
                                 pathname: "/user",
                                 searchText: this.state.searchText
                             }}>
                         <Button variant="outline-info">
                             Search
                         </Button>
                        </Link>
                     </Form>
                     </Navbar.Collapse>
                 </Navbar>
                </div>
        )
    }
}

export default NavBar

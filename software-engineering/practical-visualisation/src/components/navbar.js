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
                     <Form inline
                        name="searchbar"
                        method="post"
                        data-netlify="true"
                        onSubmit="submit"
                     >
                         <input type="hidden" name="form-name" value="searchbar" />
                         <FormControl
                         onChange={this.handleSearchInput}
                         value={this.state.searchText}
                         type="text"
                         placeholder="Github username"
                         className="mr-sm-2"
                         />
                         <Button
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

import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    // why we created header as class comp is that i need to store states

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }


    toggleNav() {
        this.setState({
            // what we doing is we negated the value of isNavOpen to the other value
            isNavOpen: !this.state.isNavOpen
        });
    }


    render() {
        return (
            //react fragment grouping together react comps
            //without adding extra nodes 
            <React.Fragment>
                {/* to make the navbar expandable when md in react */}
                <Navbar dark expand='md' >
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className='mr-auto' href="/">
                            <img src="assets/images/logo.png" height='30' width='41'
                                alt="???" />
                            {/* to make the nav bar collapsable */}
                        </NavbarBrand>
                        {/* to make an item Navbar => container > Collapse > nav> each item contains nav link */}
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem className>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> about us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> contact us</NavLink>
                                </NavItem>
                                {/* <NavItem className='has-dropdown'>
                                    <NavLink className="nav-link" >
                                    <a href="#" className='align-content-center'>Theme</a>
                                    <ul className="dropdown">
                                        <li className="dropdown-item" >
                                            <a id='light' href="#">Light</a>
                                        </li>
                                        <li className="dropdown-item" >
                                        <a id='dark' href="#">Dark</a>
                                        </li>
                                        <li className="dropdown-item" >
                                        <a id='solar' href="#">Default</a>
                                        </li>
                                    </ul>
                                    </NavLink>
                                </NavItem> */}
                            </Nav>
                        </Collapse>

                    </div>
                </Navbar>
                <Jumbotron>
                    {/* info to be displayed at the nav bar */}
                    <div className="container">
                        <div className="row row-header">
                            <div className="offset-3 col-12 col-sm-6">
                                <h1>Ristorante con fusion</h1>
                                <p>We take inspiration from the World's best cuisines,
                                    and create a unique fusion experience. Our lipsmacking
                                    creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>

        );
    }

}
export default Header;
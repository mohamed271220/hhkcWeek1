import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Input, Col, Label } from 'reactstrap';

//to use form we have to be able to hold our state
//so we use class component 
// function Contact(props) {
class Contact extends Component {
    //constructor
    constructor(props) {
        super(props);
        //now we will int our form input
        this.state = {
            firstName: '',
            lastName: '',
            telnum: '',
            email: '',
            agree: false,
            contact: 'Tel.',
            message: ''
        }
        // these are required for the fuv to work
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }
    // handlers for the form
    handleInputChange(event){
        // upon any change to the input 
        const target =event.target;
        // retrive the value and name atribute 
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name =target.name;

        this.setState({
            [name] : value,
        });
    }
    handleSubmit(event) {
        console.log("Current state is:" + JSON.stringify(this.state));
        alert("Current state is:" + JSON.stringify(this.state));
        event.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className='row row-content'>
                    <div className='col-12' >
                        <h3>Send us your Feedback!</h3>
                        <div className='col-12 col-md-9'>
                            {/* on pressing submit go ahead and do that function */}
                            <Form onSubmit={this.handleSubmit}>
                                {/* intialize one row of the form
                                and to use bs to layout the elements */}
                                <FormGroup row>
                                    {/*md={2} at md go ahead and take 2 col  */}
                                    <Label htmlfor="firstName" md={2} > First Name</Label>
                                    {/* div class="col-md-10"====  Col md={10}*/}
                                    <Col md={10}>
                                        <Input type="text" id="firstName" name="firstName"
                                            placeholder="First name"
                                            // tie the value to state
                                            value={this.state.firstName}
                                            onChange={this.handleInputChange}>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    {/*md={2} at md go ahead and take 2 col  */}
                                    <Label htmlfor="lastName" md={2} > Last Name</Label>
                                    {/* div class="col-md-10"====  Col md={10}*/}
                                    <Col md={10}>
                                        <Input type="text" id="lastName" name="lastName"
                                            placeholder="Last name"
                                            // tie the value to state
                                            value={this.state.lastName}
                                            onChange={this.handleInputChange}>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    {/*md={2} at md go ahead and take 2 col  */}
                                    <Label htmlfor="telnum" md={2} > Contact tel.</Label>
                                    {/* div class="col-md-10"====  Col md={10}*/}
                                    <Col md={10}>
                                        <Input type="text" id="telnum" name="telnum"
                                            placeholder="Tel num"
                                            // tie the value to state
                                            value={this.state.telnum}
                                            onChange={this.handleInputChange}>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    {/*md={2} at md go ahead and take 2 col  */}
                                    <Label htmlfor="email" md={2} > Email</Label>
                                    {/* div class="col-md-10"====  Col md={10}*/}
                                    <Col md={10}>
                                        <Input type="text" id="email" name="email"
                                            placeholder="example@yahoo.com"
                                            // tie the value to state
                                            value={this.state.email}
                                            onChange={this.handleInputChange}>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    {/* here we pushing the check box to the right without label */}
                                    <Col md={{ size: 6, offset: 2 }}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" name='agree'
                                                    checked={this.state.agree} 
                                                    onChange={this.handleInputChange}/>{' '}
                                                <strong>May contact you</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={{ size: 3, offset: 1 }}>
                                        <Input type="select" name='contactType'
                                        value={this.state.Contact}
                                        onChange={this.handleInputChange}>
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    {/*md={2} at md go ahead and take 2 col  */}
                                    <Label htmlfor="message" md={2} > your feedback</Label>
                                    {/* div class="col-md-10"====  Col md={10}*/}
                                    <Col md={10}>
                                        <Input type="textarea" id="message" name="message"
                                            rows="12"
                                            // tie the value to state
                                            value={this.state.message}
                                            onChange={this.handleInputChange}>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size:10 ,offset:2}}>
                                        <Button type="submit" color="primary">
                                            Send feedback
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Contact;
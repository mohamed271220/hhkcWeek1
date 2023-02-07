import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label
} from 'reactstrap';
import { Control, Form, Errors,actions } from 'react-redux-form';


//to use form we have to be able to hold our state
//so we use class component 
// function Contact(props) {

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Contact extends Component {
    //constructor
    constructor(props) {
        super(props);
        // these are required for the fuv to work
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.resetFeedbackForm();
        // event.preventDefault();
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
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20991207.9299385!2d27.52333076127994!3d36.8782878659562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdf5da112ffd41%3A0x98d646a5c371498f!2sCon%20Fusion!5e0!3m2!1sar!2seg!4v1675070156380!5m2!1sar!2seg"></iframe>
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
                            <Form model={'feedback'} onSubmit={(values) => this.handleSubmit(values)}>
                                {/* intialize one row of the form
                                and to use bs to layout the elements */}
                                <Row className="form-group">
                                    {/*md={2} at md go ahead and take 2 col  */}
                                    <Label htmlfor="firstName" md={2} > First Name</Label>
                                    {/* div class="col-md-10"====  Col md={10}*/}
                                    <Col md={10}>
                                        <Control.text model=".firstname" id="firstName" name="firstName"
                                            placeholder="First name" className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(13)
                                            }} />
                                        <Errors
                                            className="text-danger"
                                            model=".lastname"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    {/*md={2} at md go ahead and take 2 col  */}
                                    <Label htmlfor="lastName" md={2} > Last Name</Label>
                                    {/* div class="col-md-10"====  Col md={10}*/}
                                    <Col md={10}>
                                        <Control.text model=".lastname" id="lastName" name="lastName"
                                            placeholder="Last name" className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(13)
                                            }} />

                                        <Errors
                                            className="text-danger"
                                            model=".lastname"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    {/*md={2} at md go ahead and take 2 col  */}
                                    <Label htmlfor="telnum" md={2} > Contact tel.</Label>
                                    {/* div class="col-md-10"====  Col md={10}*/}
                                    <Col md={10}>
                                        <Control.text model=".telnum" id="telnum" name="telnum"
                                            placeholder="Tel num" className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".telnum"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 numbers',
                                                maxLength: 'Must be 15 numbers or less',
                                                isNumber: 'Must be a number'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    {/*md={2} at md go ahead and take 2 col  */}
                                    <Label htmlfor="email" md={2} > Email</Label>
                                    {/* div class="col-md-10"====  Col md={10}*/}
                                    <Col md={10}>
                                        <Control.text model=".email" id="email" name="email"
                                            placeholder="example@yahoo.com" className="form-control"
                                            validators={{
                                                required, validEmail
                                            }} />
                                        <Errors
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                validEmail: 'Invalid Email Address'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{ size: 6, offset: 2 }}>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox model=".agree" name="agree"
                                                    className="form-check-input"
                                                />
                                                <strong>May we contact you?</strong>
                                            </Label>
                                        </div>
                                    </Col>
                                    <Col md={{ size: 3, offset: 1 }}>
                                        <Control.select model=".contactType" name="contactType"
                                            className="form-control">
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="message" md={2}>Your Feedback</Label>
                                    <Col md={10}>
                                        <Control.textarea model=".message" id="message" name="message"
                                            rows="12"
                                            className="form-control" />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{ size: 10, offset: 2 }}>
                                        <Button type="submit" color="primary">
                                            Send Feedback
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Contact;
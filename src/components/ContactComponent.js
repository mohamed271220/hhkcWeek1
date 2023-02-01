import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

//to use form we have to be able to hold our state
//so we use class component 
// function Contact(props) {
class Contact extends Component {
    //constructor
    constructor(props) {
        super(props);
        // now we will int our form Control.text
        this.state = {
            firstName: '',
            lastName: '',
            telnum: '',
            email: '',
            agree: false,
            contact: 'Tel.',
            message: '',
            touched: {
                firstName: false,
                lastName: false,
                telnum: false,
                email: false,
            }
        }
        // these are required for the fuv to work
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleControl.textChange = this.handleControl.textChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

    }
    // // handlers for the form
    // handleControl.textChange(event) {
    //     // upon any change to the Control.text 
    //     const target = event.target;
    //     // retrive the value and name atribute 
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    //     this.setState({
    //         [name]: value,
    //     });
    // }


    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }
    // method for form validation
    // which Control.text was used
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        })
    }
    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if (this.state.touched.firstName && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstName && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (this.state.touched.lastName && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastName && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        //string of char should be all numbers
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }

    render() {
        // const errors = this.validate(
        //     this.state.firstName,
        //     this.state.lastName,
        //     this.state.telnum,
        //     this.state.email);
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
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                {/* intialize one row of the form
                                and to use bs to layout the elements */}
                                <Row className="form-group">
                                    {/*md={2} at md go ahead and take 2 col  */}
                                    <Label htmlfor="firstName" md={2} > First Name</Label>
                                    {/* div class="col-md-10"====  Col md={10}*/}
                                    <Col md={10}>
                                        <Control.text model=".firstname" id="firstName" name="firstName"
                                            placeholder="First name" className="form-control"
                                        // tie the value to state
                                        // value={this.state.firstName}
                                        // valid={errors.firstname===''}
                                        // invalid={errors.firstname!==''}
                                        // onBlur={this.handleBlur('firstName')}
                                        // onChange={this.handleControl.textChange}
                                        
                                        />
                                        {/* <FormFeedback>{errors.firstname}</FormFeedback> */}

                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    {/*md={2} at md go ahead and take 2 col  */}
                                    <Label htmlfor="lastName" md={2} > Last Name</Label>
                                    {/* div class="col-md-10"====  Col md={10}*/}
                                    <Col md={10}>
                                        <Control.text model=".lastname" id="lastName" name="lastName"
                                            placeholder="Last name" className="form-control"
                                        // tie the value to state
                                        // value={this.state.lastName}
                                        // valid={errors.lastname===''}
                                        // invalid={errors.lastname!==''}
                                        // onBlur={this.handleBlur('lastName')}
                                        // onChange={this.handleControl.textChange}
                                        />
                                    
                                        {/* <FormFeedback>{errors.lastname}</FormFeedback> */}
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    {/*md={2} at md go ahead and take 2 col  */}
                                    <Label htmlfor="telnum" md={2} > Contact tel.</Label>
                                    {/* div class="col-md-10"====  Col md={10}*/}
                                    <Col md={10}>
                                        <Control.text model=".telnum" id="telnum" name="telnum"
                                            placeholder="Tel num" className="form-control"
                                        // tie the value to state
                                        // value={this.state.telnum}
                                        // valid={errors.telnum===''}
                                        // invalid={errors.telnum!==''}
                                        // onBlur={this.handleBlur('telnum')}
                                        // onChange={this.handleControl.textChange}
                                        />
                                        {/* <FormFeedback>{errors.telnum}</FormFeedback> */}
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    {/*md={2} at md go ahead and take 2 col  */}
                                    <Label htmlfor="email" md={2} > Email</Label>
                                    {/* div class="col-md-10"====  Col md={10}*/}
                                    <Col md={10}>
                                        <Control.text model=".email" id="email" name="email"
                                            placeholder="example@yahoo.com" className="form-control"
                                        // tie the value to state
                                        // value={this.state.email}
                                        // valid={errors.email===''}
                                        // invalid={errors.email!==''}
                                        // onBlur={this.handleBlur('email')}
                                        // onChange={this.handleControl.textChange}
                                        />
                                        {/* <FormFeedback>{errors.email}</FormFeedback> */}
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
                            </LocalForm>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Contact;
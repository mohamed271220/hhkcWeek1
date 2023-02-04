import React, { Component } from 'react';
import {
    Breadcrumb, Button, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText
    , Select, Row, Col, Label, Modal, ModalBody, ModalHeader, Collapse, NavItem, Jumbotron, Input
} from 'reactstrap';
import { Link } from 'react-router-dom';

import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleModal: false
        }
        // these are required for the fuv to work
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    handleSubmit(values) {
        // console.log('Current State is: ' + JSON.stringify(values));
        // alert('Current State is: ' + JSON.stringify(values));
        // // event.preventDefault();
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    toggleModal() {
        this.setState({
            // what we doing is we negated the value of isNavOpen to the other value
            isModalOpen: !this.state.isModalOpen,
        });
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal} className='mt-2'>
                    <span className="fa fa-pencil fa-lg"> submit comment </span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal} >Submit comment</ModalHeader>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)} className='col-12' >
                        <Row className='form-group '>
                            <Label md={2} htmlfor="rating">Rating</Label>
                            <Col md={12}>
                                <Control.select
                                    model=".rating" name="rating"
                                    className="form-control w-100">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Control.select>
                            </Col>

                        </Row>
                        <Row className='form-group'>
                            <Label htmlfor='yourname' md={4}>Your name</Label>
                            <Col md={12}>
                                <Control.text model=".yourName" id="yourName" name="yourName"
                                    placeholder="your name goes here" className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(13)
                                    }}
                                />
                                <Errors
                                    className='text-danger'
                                    model=".yourName"
                                    show='touched'
                                    messages={{
                                        required: 'Required . ',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Label htmlfor='yourComment' id='yourComment' name='yourComment' md={12}>
                                Comment</Label>
                            <Col md={12}>
                                <Control.textarea model=".message" id="message" name="message"
                                    rows="6"
                                    className="form-control" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{ size: 10 }} className='mt-3'>
                                <Button type="submit" color="primary">
                                    submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </Modal>
            </div>
        );
    }
}

function RenderDishDetails({ dish }) {
    //now the dish is a prop
    if (dish != null) {
        return (
            <Card className='col-12 col-md-5 m-1 p-0'>
                < CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody >
                    <CardTitle heading>{dish.name}</CardTitle>
                    <CardText >{dish.description}</CardText>
                </CardBody>
            </Card>
        );


    }
    else {
        return (
            <div></div>
        )
    }
}

function RenderComment({ comments, addComment, dishId }) {
    const itemcomment = comments.map((comment) => {
        if (comment != null) {
            return (
                <div key={comment.id} className=''>
                    <br></br>
                    <li> {comment.comment}</li>
                    <div>-- {comment.author}, <span>{new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date(Date.parse(comment.date)))}</span></div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    });
    return (
        <div className='col-md-5 m-1'>
            <h2>Comments:</h2>
            {itemcomment}
            <CommentFrom dishId={dishId}
                addComment={addComment}
            />
        </div>
    )
}
const DishDetail = (props) => {
    console.log('Dishdetail comp.componentDidUpdate ')
    return (
        <div className='container'>
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className='row offset-md-1'>
                <RenderDishDetails dish={props.dish} />
                <RenderComment comments={props.comments}
                    addComment={props.addComment}
                    dishId={props.dish.id}
                />

            </div>
        </div>

    );
}


export default DishDetail;
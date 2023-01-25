import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';
import Menu from './MenuComponent';

class DishDetail extends Component {
    constructor(props) {
        super(props);

    }
    RenderDishDetails(dish) {
        if (dish != null) {
            return (
                <div className='container'>
                    <div className='row'>
                        <Card className='col-12 col-md-5 m-1 '>
                            < CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody >
                                <CardTitle heading>{dish.name}</CardTitle>
                                <CardText >{dish.description}</CardText>
                            </CardBody>
                        </Card>
                        {this.renderComment(dish)}
                    </div>
                </div>
            );


        }
        else {
            return (
                <div></div>
            )
        }
    }

    renderComment(dish) {
        const itemcomment = dish.comments.map((comment) => {
            if (comment != null) {
            return (
                <div key={comment.id} className=''>
                    <br></br>
                    <li> {comment.comment}</li>
                    <div>-- {comment.author}, <span>{comment.date}</span></div>
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

            </div>
        )
    }
    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    {this.RenderDishDetails(this.props.dish)}
                </div>
            </div>
            );
}
}
export default DishDetail;
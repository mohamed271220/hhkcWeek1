import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';
import Menu from './MenuComponent';

function RenderDishDetails({dish}) {
    //now the dish is a prop
    if (dish != null) {
        return (
            <div className='container'>
                <div className='row'>
                    <Card className='col-12 col-md-5 m-1 p-0'>
                        < CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody >
                            <CardTitle heading>{dish.name}</CardTitle>
                            <CardText >{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    <RenderComment dish={dish}/>
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

function RenderComment({dish}) {
    const itemcomment = dish.comments.map((comment) => {
        if (comment != null) {
            return (
                <div key={comment.id} className=''>
                    <br></br>
                    <li> {comment.comment}</li>
                    <div>-- {comment.author}, <span>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</span></div>
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
const DishDetail=(props) => {
    console.log('Dishdetail comp.componentDidUpdate ')
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 '>
                    <RenderDishDetails dish={props.dish}/>
                </div>
            </div>
        </div>

    );
}

export default DishDetail;
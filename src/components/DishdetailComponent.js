import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

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

function RenderComment({ comments }) {
    const itemcomment = comments.map((comment) => {
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
                    <RenderComment comments={props.comments} />
            </div>
        </div>

    );
}

export default DishDetail;
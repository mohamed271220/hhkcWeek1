import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link, } from 'react-router-dom';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
function RenderMenuItem({ dish, onClick }) {
    // you can specifi the props you recivinf
    return (
        <Card>
            {/* link here is to link to the items page */}
            {/* url */}
            {/* {`` means to evalute the code first} */}
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                <CardImgOverlay body className="ml-5">
                    <CardTitle heading>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>

    );
}

const Menu = (props) => {
    // another way to make a funtional Composition
    const menu = props.dishes.dishes.map((dish) => {
        //props only 
        return (
            <div key={dish.id} className='col-12 col-md-5 m-1 '>
                {/* key attribute to sub in the list Component */}
                <RenderMenuItem dish={dish} />
            </div>
        );
    });

    if (props.dishes.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
}



export default Menu;
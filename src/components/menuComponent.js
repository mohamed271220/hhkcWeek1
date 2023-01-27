import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';

function RenderMenuItem({ dish, onClick }) {
    // you can specifi the props you recivinf
    return (
        <Card onClick={() => onClick(dish.id)}>
            < CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay body className="ml-5">
                <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>

    );
}

    const Menu=(props) => {
        // another way to make a funtional Composition
        const menu = props.dishes.map((dish) => {
            //props only 
            return (
                <div key={dish.id} className='col-12 col-md-5 m-1 '>
                    {/* key attribute to sub in the list Component */}
                    <RenderMenuItem dish={dish} onClick={props.onClick}/>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }



export default Menu;
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle,CardText } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish })
    }
    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    < CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody >
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText >{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }
    render() {
        //returns the corresponding html
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                    {/* key attribute to sub in the list Component */}
                    <Card onClick={() => this.onDishSelect(dish)}>
                        < CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardTitle heading>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className='container'>
                <div className='row'>
                    {menu}
                    {/* js var */}
                </div>
                <div className='row'>
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }

}
export default Menu;
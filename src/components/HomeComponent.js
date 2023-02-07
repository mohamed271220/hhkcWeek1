import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

import  Loading  from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

// item is the only prop to be used
function RenderCard({ item,isLoading,errMess }) {

    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else
        return (
            <Card>
                  <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );

}


function Home(props) {
    return (
        <div className="container">
            <div className="row algin-items-start" >
                <div className="col-12 col-md m-1" >
                    {/* we will define render card to reander the parameter we send  */}
                    <RenderCard item={props.dish}
                    isLoading={props.dishesLoading}
                    errMsg={props.dishesErrMsg}
                    />
                </div>
                <div className="col-12 col-md m-1">
                <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess} />
                    
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}


export default Home;

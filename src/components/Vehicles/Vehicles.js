import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Vehicles = (props) => {


    //console.log(props);
   const {transport, image, key} = props.transport;
   //console.log(transport);
    return (
        <div className="vehicle">
            <Link to={"/destination/" + key}>
                <Card style={{ width: '15rem', textAlign :"center", border:"3px solid black"}}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title style={{fontSize:"30px", fontWeight:"700"}}>{transport}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default Vehicles;
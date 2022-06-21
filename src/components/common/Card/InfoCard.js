import React from "react";
import "./styles.css";

import {
  Col,
  Card,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardText
} from 'reactstrap';

import ImgBg from '../../../assets/imgs/card-bg.jpg';


const InfoCard = ({ item }) => {
  return (
    <Col md={4}>
      <Card className="card-container">
      <img src={ImgBg} alt="this is a card background image" className="card-img"/>
        <CardBody>
          <h1>{item.name}</h1>
          <CardText className="text-muted">
            Gender: {item.gender}
          </CardText>
        </CardBody>
        <ListGroup variant="flush">
          <ListGroupItem>Hair Color: {item.hair_color}</ListGroupItem>
          <ListGroupItem>Eye Color: {item.eye_color}</ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
  );
};

export default InfoCard;
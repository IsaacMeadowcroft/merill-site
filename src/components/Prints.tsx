import React from 'react';
import '../css/Prints.css';
import ShopItem from './ShopItem';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Prints(): JSX.Element {
  return (
    <Container fluid style={{backgroundColor: 'black', padding: '0px'}} id="Prints">
        <Row>
            <Col><ShopItem /></Col>
            <Col><ShopItem /></Col>
            <Col><ShopItem /></Col>
            <Col><ShopItem /></Col>
        </Row>
        <Row>
            <Col><ShopItem /></Col>
            <Col><ShopItem /></Col>
            <Col><ShopItem /></Col>
            <Col><ShopItem /></Col>
        </Row>
        <Row>
            <Col><ShopItem /></Col>
            <Col><ShopItem /></Col>
            <Col><ShopItem /></Col>
            <Col><ShopItem /></Col>
        </Row>
    </Container>
  );
}

export default Prints;
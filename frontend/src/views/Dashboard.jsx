import React from "react";
import SideBar from "../components/SideBar";
import { Form, Button ,Col, Row, Container } from "react-bootstrap";

export default function Dashboard(){
    return(

        <Container className="dashborad">

                <Row>
                   <Col lg={4} md={6} sm={12} className="dashbord-sidebar" >
                        
                    <SideBar/>
                    <div className="col-md-8">
                        <h3></h3>
                    </div>
        
                    </Col>
                </Row>
        </Container>
    )
}
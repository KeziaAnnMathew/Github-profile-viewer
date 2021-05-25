import React, { Component } from "react";
import {Card} from 'react-bootstrap';
import {Person} from '@material-ui/icons';
import './CardSection.css';

class CardSection extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="card-container">
                <Card className="card" style={{ width: '19rem', height:'9rem' }}>
                    <Card.Body className="card-body">
                        <div className="user-img">
                            <p className="person-icon"><Person /></p>
                        </div>
                        <div className="user-details">
                        <Card.Title>User name</Card.Title>
                        <Card.Text className="text">
                            @handle, work at description<br/>
                            bio to be wrap and not than <br/>
                            3 lines
                        </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '19rem', height:'9rem' }}>
                    <Card.Body className="card-body">
                        <div className="user-img">
                            <p className="person-icon"><Person /></p>
                        </div>
                        <div className="user-details">
                        <Card.Title>User name</Card.Title>
                        <Card.Text className="text">
                            @handle, work at description<br/>
                            bio to be wrap and not than <br/>
                            3 lines
                        </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '19rem', height:'9rem' }}>
                    <Card.Body className="card-body">
                        <div className="user-img">
                            <p className="person-icon"><Person /></p>
                        </div>
                        <div className="user-details">
                        <Card.Title>User name</Card.Title>
                        <Card.Text className="text">
                            @handle, work at description<br/>
                            bio to be wrap and not than <br/>
                            3 lines
                        </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '19rem', height:'9rem' }}>
                    <Card.Body className="card-body">
                        <div className="user-img">
                            <p className="person-icon"><Person /></p>
                        </div>
                        <div className="user-details">
                        <Card.Title>User name</Card.Title>
                        <Card.Text className="text">
                            @handle, work at description<br/>
                            bio to be wrap and not than <br/>
                            3 lines
                        </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '19rem', height:'9rem' }}>
                    <Card.Body className="card-body">
                        <div className="user-img">
                            <p className="person-icon"><Person /></p>
                        </div>
                        <div className="user-details">
                        <Card.Title>User name</Card.Title>
                        <Card.Text className="text">
                            @handle, work at description<br/>
                            bio to be wrap and not than <br/>
                            3 lines
                        </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '19rem', height:'9rem' }}>
                    <Card.Body className="card-body">
                        <div className="user-img">
                            <p className="person-icon"><Person /></p>
                        </div>
                        <div className="user-details">
                        <Card.Title>User name</Card.Title>
                        <Card.Text className="text">
                            @handle, work at description<br/>
                            bio to be wrap and not than <br/>
                            3 lines
                        </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                

                
                </div>
            </React.Fragment>
        )
    }
   
}

export default CardSection;
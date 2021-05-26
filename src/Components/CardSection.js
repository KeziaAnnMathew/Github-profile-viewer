import React from "react";
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Person} from '@material-ui/icons';
import Users from '../Users.json';
import './CardSection.css';

// class CardSection extends Component {
    const CardSection= (props) => {
        return(
            <React.Fragment>
                <div className="card-container">
                    {Users.users.filter((val)=>{
                        if(props.term === ""){
                            return val;
                        }
                        else if(val.userName.toLowerCase().includes(props.term.toLowerCase())){
                            return val;
                        }
                    }).map((item)=>(
                    <Card className="card" style={{ width: '19rem', height:'9rem' }} key={item.id}>
                        <Link to={`/${item.id}`} style={{ textDecoration: 'none' }}>
                            <Card.Body className="card-body">
                                <div className="user-img">
                                    <p className="person-icon"><Person /></p>
                                </div>
                                <div className="user-details">
                                <Card.Title>{item.userName}</Card.Title>
                                <Card.Text className="text">
                                    {item.handle}, work at {item.work},
                                    bio {item.bio}
                                </Card.Text>
                                </div>
                            </Card.Body> 
                        </Link>
                    </Card>
                    ))}                               
                </div>
            </React.Fragment>
        )
    
    }
   
// }

export default CardSection;
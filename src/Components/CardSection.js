import React from "react";
import {Card} from 'react-bootstrap';
import { useState} from "react";
import { Link } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import {Person} from '@material-ui/icons';
import Users from '../Users.json';
import './CardSection.css';

// class CardSection extends Component {
    const CardSection= (props) => {
        const [items,setItems] = useState(Users.users.slice(0,10));
        const [hasMore,setHasMore] =  useState(true);
        const fetchMoreData = () => {
            if (items.length >= 20) {
              setHasMore(false);
              return;
            }
            setTimeout(() => {
                setItems(Users.users)
                console.log({items})
              }, 2000);
        };
          
        return(
            <React.Fragment>
                <InfiniteScroll
                    dataLength={items.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    height={400}
                >

                    <div className="card-container">
                        {items.filter((val)=>{
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


                </InfiniteScroll>
            </React.Fragment>
        )
    
    }
   
// }

export default CardSection;
import React from "react";
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState,useRef, useCallback} from "react";
import {Person} from '@material-ui/icons';
import useProfileSearch from './useProfileSearch';
import './CardSection.css';

// class CardSection extends Component {
    const CardSection= (props) => {    

        const [pageNumber,setPageNumber] = useState(1);
        const [sinceVal,setSinceVal]=useState(0);

        const {
            loading, 
            hasMore, 
            usersList, 
            error
        } = useProfileSearch(props.term,pageNumber,sinceVal) 
        
        const observer = useRef()
        const lastDocumentRef = useCallback(
            (node) => {
                if(loading) return;
            if(observer.current) observer.current.disconnect();
            observer.current =  new IntersectionObserver(entries =>{
                if(entries[0].isIntersecting && hasMore){
                    setSinceVal(usersList[usersList.length-1].id)
                    setPageNumber(prevPageNumber => prevPageNumber + 1)
                    
                }
            })
            if(node) observer.current.observe(node)
        },[loading,hasMore])


        return(
            <React.Fragment>
                    <div>
                        <div className="card-container">
                            {usersList.map((item,index)=>{
                                if(usersList.length == index+1){
                                    return(
                                        <Card className="card" style={{ width: '19rem', height:'9rem' }}  ref={lastDocumentRef} key={item.login}>
                                    <Link to={`/${item.login}`} style={{ textDecoration: 'none' }}>
                                        <Card.Body className="card-body">
                                            <div className="user-img">
                                                <p className="person-icon"><Person /></p>
                                            </div>
                                            <div className="user-details">
                                            <Card.Title>{item.login}</Card.Title>
                                            <Card.Text className="textdet">
                                                @{item.login}, work at,
                                            </Card.Text>
                                            </div>
                                        </Card.Body> 
                                    </Link>
                                        </Card>
                                    )
                                }
                                else{
                                    return(
                                        <Card className="card" style={{ width: '19rem', height:'9rem' }} key={item.login}>
                                    <Link to={`/${item.login}`} style={{ textDecoration: 'none' }}>
                                        <Card.Body className="card-body">
                                            <div className="user-image">
                                                <img src={item.avatar_url} alt="profile" />
                                            </div>
                                            <div className="user-details">
                                            <Card.Title>{item.login}</Card.Title>
                                            <Card.Text className="textdet">
                                                @{item.login}
                                            </Card.Text>
                                            </div>
                                        </Card.Body> 
                                    </Link>
                                        </Card>
                                    )
                                }
                            })}                               
                        </div>
                        <div>{loading && 'Loading...'}</div>
                        <div>{error && "Error"}</div>
                    </div>
            </React.Fragment>
        )
    
    }
   
// }

export default CardSection;
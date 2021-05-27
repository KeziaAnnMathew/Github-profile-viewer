import React from "react";
import {Card} from 'react-bootstrap';
import { useEffect,useState, useRef, useCallback} from "react";
import { Link } from 'react-router-dom';
import {Person} from '@material-ui/icons';
import Users from '../Users.json';
import './CardSection.css';

const CardSection= (props) => {
        const [loading,setLoading] = useState(true);
        const [error,setError] = useState(false);
        const [hasMore,setHasMore] = useState(false);
        const [usersList,setUsersList] = useState(Users.users.slice(0,10));

        const observer=useRef()
        const lastDocumentRef = useCallback(node =>{
            if(loading) return;
            if(observer.current) observer.current.disconnect();
            observer.current =  new IntersectionObserver(entries =>{
                if(entries[0].isIntersecting && hasMore){
                    console.log("passed");
                    
                }
            })
            if(node) observer.current.observe(node)
        },[loading,hasMore])

        useEffect(()=>{
            setUsersList(Users.users.slice(0,10))
        },[props.term])

        useEffect(()=>{
            setLoading(true);
            setError(false);
            const val={lastDocumentRef}
            if(val){
               setTimeout(() => {
                setUsersList(prevList =>{
                    return [...new Set([...prevList,...Users.users.map(el =>el)])]
               })
               setLoading(false)
            },2000);
               setHasMore(Users.users.length > 0)
            }
            else{
                setError(true);
            }
            
            return null;
        },[props.term])
          
        return(
            <React.Fragment>

                    <div className="card-container">
                        {usersList.filter((val)=>{
                            if(props.term === ""){
                                return val;
                            }
                            else if(val.userName.toLowerCase().includes(props.term.toLowerCase())){
                                return val;
                            }
                        }).map((item,index)=>{
                            if(index === 10){
                                return (
                                    <div>
                                        <Card className="card" style={{ width: '19rem', height:'9rem' }}  ref={lastDocumentRef} key={item.id}>
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
                                    </div>
                                )
                            }
                            else{
                                return (
                                    <div>
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
                                    </div>
                                )
                            }
                        
                        })}
                        <div>{loading && 'Loading...'}</div>
                        <div>{error && 'Error'}</div>                               
                    </div>
            </React.Fragment>
        )
}


export default CardSection;
import React from "react";
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState,useRef, useCallback} from "react";
import {Person} from '@material-ui/icons';
import Users from '../Users.json';
import useProfileSearch from './useProfileSearch';
import './CardSection.css';

// class CardSection extends Component {
    const CardSection= (props) => {    

        const [pageNumber,setPageNumber] = useState(1);

        const {
            loading, 
            hasMore, 
            usersList, 
            error
        } = useProfileSearch(props.term,pageNumber)   
        
        const observer = useRef()
        const lastDocumentRef = useCallback(
            (node) => {
                console.log(node)
            },
            [],
        )


        return(
            <React.Fragment>
                    <div>
                        <div className="card-container">
                            {usersList.map((item,index)=>{
                                if(usersList.length == index+1){
                                    <Card className="card" style={{ width: '19rem', height:'9rem' }}  ref={lastDocumentRef} key={item.login}>
                                    {/* <Link to={`/${item.id}`} style={{ textDecoration: 'none' }}> */}
                                        <Card.Body className="card-body">
                                            <div className="user-img">
                                                <p className="person-icon"><Person /></p>
                                            </div>
                                            <div className="user-details">
                                            <Card.Title>{item.login}</Card.Title>
                                            <Card.Text className="text">
                                                @{item.login}, work at ,
                                                bio 
                                            </Card.Text>
                                            </div>
                                        </Card.Body> 
                                    {/* </Link> */}
                                    </Card>
                                }
                                // else{
                                //     <Card className="card" style={{ width: '19rem', height:'9rem' }} key={item.login}>
                                // {/* <Link to={`/${item.id}`} style={{ textDecoration: 'none' }}> */}
                                //     <Card.Body className="card-body">
                                //         <div className="user-img">
                                //             <p className="person-icon"><Person /></p>
                                //         </div>
                                //         <div className="user-details">
                                //         <Card.Title>{item.login}</Card.Title>
                                //         <Card.Text className="text">
                                //             @{item.login}, work at ,
                                //             bio 
                                //         </Card.Text>
                                //         </div>
                                //     </Card.Body> 
                                // {/* </Link> */}
                                //     </Card>
                                // }
                            
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



// .filter((val)=>{
//     if(props.term === ""){
//         return val;
//     }
//     else if(val.userName.toLowerCase().includes(props.term.toLowerCase())){
//         return val;
//     }
// })
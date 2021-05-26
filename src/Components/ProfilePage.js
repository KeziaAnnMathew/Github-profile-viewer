import React, { useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Person,Reply} from '@material-ui/icons';
import ProfileLogo from '../profile_logo1.jpg';

import Users from '../Users.json';
import './ProfilePage.css';

function ProfilePage({ match }){
    useEffect(()=>{
        fetchItem();

    });

    const [item, setItem] = useState('');
    const [repos, setRepos] = useState([]);

    const fetchItem =() => {
            Users.users.find((val)=>{
                if (val.id == match.params.id){
                    const itemval=val;
                    setItem(itemval);
                    const repos = val.pinnedRepo;
                    setRepos(repos)
                }
            })
    }

    return(
        <div className="profile-container">
            <div className="header-section">
                <div>
                    <Link to={'/'} style={{ textDecoration: 'none' , color: 'rgb(136, 136, 136)'}}>
                        <Reply /> Back
                    </Link> 
                </div>
                <div className="credentials">
                    <img src={ProfileLogo} alt="profile" />
                    <div className="user-details">
                        <h5>{item.userName}</h5>
                        {item.handle}
                    </div>   
                </div>
            </div>
            <div className="bio-section">
               <div className="details">
                    <span className="small-heading">Bio</span><br />
                    {item.bio}
               </div>
               <br />
               <div className="details">
                    <span className="small-heading">Works at</span><br />
                    {item.work}
               </div>
               <br />
               <div className="num-data">
                    <div className="details">
                        <span className="small-heading">Repositories</span><br />
                        {item.repo}
                    </div>
                    <div className="details">
                        <span className="small-heading">Followers</span><br />
                        {item.followers}
                    </div>
               </div>
               <br />
               <div className="details">
                        <span className="small-heading">Pinned Repositories</span><br />
                        <div className="repo">
                            {repos.map((repo,i)=>(
                                <Card style={{ width: '30rem', height: '4rem' }} key={i}>
                                <Card.Body>
                                    <div className="user-img">
                                        <p className="repo-person-icon"><Person /></p>
                                    </div>
                                    <div className="user-details">
                                        <Card.Title>{repo.reponame}</Card.Title>
                                        <Card.Text  className="text">
                                            {repo.description}
                                        </Card.Text>
                                    </div>
                                </Card.Body> 
                            </Card>
                            )
                            )}
                        </div>
                </div>
                
            </div>
            
        </div>
        
    )
}
export default ProfilePage;
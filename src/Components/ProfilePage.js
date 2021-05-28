import React, { useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Person,Reply} from '@material-ui/icons';

import Users from '../Users.json';
import './ProfilePage.css';
import useSingelProfileSearch from './useSingelProfileSearch';
import useRepoSearch from './useRepoSearch';

function ProfilePage({ match }){
    const {
        userList
     }=useSingelProfileSearch(match.params.id);

     const {
        repoList
     }=useRepoSearch(match.params.id);


    return(
        <div className="profile-container">
            <div className="header-section">
                <div>
                    <Link to={'/'} style={{ textDecoration: 'none' , color: 'rgb(136, 136, 136)'}}>
                        <Reply /> Back
                    </Link> 
                </div>
                <div className="credentials">
                    <img src={userList.avatar_url} alt="profile" />
                    <div className="user-details">
                        <h5>{userList.login}</h5>
                        @{userList.login}
                    </div>   
                </div>
            </div>
            <div className="bio-section">
               <div className="details">
                    <span className="small-heading">Bio</span><br />
                    {userList.bio}
               </div>
               <br />
               <div className="details">
                    <span className="small-heading">Works at</span><br />
                    {userList.company}
               </div>
               <br />
               <div className="num-data">
                    <div className="details">
                        <span className="small-heading">Repositories</span><br />
                        {userList.public_repos}
                    </div>
                    <div className="details">
                        <span className="small-heading">Followers</span><br />
                        {userList.followers}
                    </div>
               </div>
               <br />
               <div className="details">
                        <span className="small-heading">Pinned Repositories</span><br />
                        <div className="repo">
                            {repoList.map((repo)=>(
                                <Card key={repo.id}>
                                <Card.Body>
                                    <div className="user-img">
                                        <p className="repo-person-icon"><Person /></p>
                                    </div>
                                    <div className="user-details">
                                        <Card.Title>{repo.full_name}</Card.Title>
                                        <Card.Text  className="text">
                                            {repo.description}
                                        </Card.Text>
                                    </div>
                                </Card.Body> 
                            </Card>
                            ))}
                        </div>
                </div>
                
            </div>
            
        </div>
        // <div></div>
        
    )
}
export default ProfilePage;
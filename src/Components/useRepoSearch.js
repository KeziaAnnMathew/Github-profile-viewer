import React from 'react';
import axios from 'axios';
import { useEffect,useState} from "react";

export default function useRepoSearch(userName) {

    const [repoList,setRepoList] = useState([]);
    const [error,setError] = useState(false);

    useEffect(async ()=>{
        setError(false);
        await axios({
            method:'GET',
            url:`https://api.github.com/users/${userName}/repos`,
        }).then(res=>{
            console.log(res.data)
            setRepoList(prevList =>{
                return [...new Set([...prevList,...res.data.map(el=>el)])]
           })
           
        }).catch(e =>{
            setError(true);
        })
        },[])
        console.log({repoList})
    return {repoList}
}

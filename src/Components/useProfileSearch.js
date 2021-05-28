import React from 'react'
import { useEffect,useState} from "react";
import axios from 'axios';
export default function useProfileSearch(query,pageNumber) {
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [hasMore,setHasMore] = useState(false);
    const [usersList,setUsersList] = useState([]);

    useEffect(()=>{
        setUsersList([])
    },[query])

    useEffect(()=>{
        setLoading(true);
        setError(false)
        let cancel
        if(query==""){
            axios({
                method:'GET',
                url:"https://api.github.com/users",
                params:{page:pageNumber},
                cancelToken: new axios.CancelToken(c=> cancel = c)
            }).then(res=>{
                setUsersList(prevList =>{
                    return [...new Set([...prevList,...res.data.map(el=>el)])]
               })
               console.log(res.data)
               setHasMore(res.data.length > 0)
               setLoading(false);
            }).catch(e =>{
                if(axios.isCancel(e)) return
                setError(true);
            })
        }
        else{
            axios({
                method:'GET',
                url:"https://api.github.com/search/users",
                params:{q:query,page:pageNumber},
                cancelToken: new axios.CancelToken(c=> cancel = c)
            }).then(res=>{
                setUsersList(prevList =>{
                    return [...new Set([...prevList,...res.data.items.map(el=>el)])]
               })
               console.log(res.data.items)
               setHasMore(res.data.items.length > 0)
               setLoading(false);
            }).catch(e =>{
                if(axios.isCancel(e)) return
                // setError(true);
                console.log(e)
            })
        }
        
        return ()=>cancel()
    },[query,pageNumber])

    return { loading, hasMore, usersList, error};
}

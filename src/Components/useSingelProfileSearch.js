import axios from 'axios';
import { useEffect,useState} from "react";

export default function useSingelProfileSearch(userName) {
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [userList,setUserList] = useState('');
    
    useEffect(()=>{
        async function fetchData(){
            setLoading(true);
            setError(false)
            await axios({
                method:'GET',
                url:`https://api.github.com/users/${userName}`,
            }).then(res=>{
                setUserList(res.data)
                setLoading(false);
            }).catch(e =>{
                setError(true);
            })
        }
        fetchData()
        },[userName])
    console.log({userList})
    return {userList}
}

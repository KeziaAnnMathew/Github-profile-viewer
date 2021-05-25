import CardSection from './CardSection.js';
import { useState} from "react";
import Logo from '../github_logo.png'
import { Search, Close} from '@material-ui/icons';
import './SearchPage.css'

function SearchPage(){
    const [searchTerm,setSearchTerm] = useState('');
    return(
        <div className="search-container">
            <div className="header-section">
                <p><img src={Logo} alt="github logo"/>GitHub Profile Viewer</p>
                <div className="search-section">
                    <button><Search /></button>
                    <input type="text" placeholder="Search user" value={searchTerm} onChange={event => {setSearchTerm(event.target.value)}}/>
                    <button onClick={()=>{setSearchTerm("")}}><Close /></button>
                </div>
            </div>
            <CardSection term={searchTerm}/>
        </div>
    )
}
export default SearchPage;
import CardSection from './CardSection.js';
import { useState} from "react";
import Logo from '../github_logo.png'
import { Search, Close} from '@material-ui/icons';
import './SearchPage.css'

function SearchPage(){
    const [searchTerm,setSearchTerm] = useState('');
    const [pageNUmber,setPageNumber] = useState(1);



function handleSearch(e){
    setSearchTerm(e.target.value);
    setPageNumber(1)
}

    return(
        <div className="search-container">
            <div className="header-section">
                <p><img src={Logo} alt="github logo"/>GitHub Profile Viewer</p>
                <div className="search-section">
                    <button><Search /></button>
                    <input type="text" placeholder="Search user" value={searchTerm} onChange={handleSearch}/>
                    <button onClick={()=>{setSearchTerm("")}}><Close /></button>
                </div>
            </div>
            <CardSection 
            term={searchTerm}
            pageNumber={pageNUmber}
            />
        </div>
    )
}
export default SearchPage;
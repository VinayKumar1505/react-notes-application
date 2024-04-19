import { MdSearch } from "react-icons/md";

export default function Search ({handleSearchText}){
   return (
    <div className="search">
       <MdSearch className="search-icon" size="2.4rem"/>
       <input className="search-input" type="text" placeholder=" type to search...." onChange={(event)=>handleSearchText(event.target.value)}></input>
    </div>
   )
}
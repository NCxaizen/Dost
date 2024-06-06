import React from "react";
import "./SearchBar.css"

const SearchBar=({onSearch})=>{
    return( <div className="body">
            <form>
	<label for="search">Search</label>
	<input id="search" type="search" pattern=".*\S.*" onChange={onSearch}required/>
	<span class="caret"></span>
    </form>
        </div>
    )
}

export default SearchBar;
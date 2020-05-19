import React, {Component} from 'react';
import './searchBar.css'
class SearchBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="search-bar">
                <input type="text"/>
            </div>
        );
    }
}

export default SearchBar;
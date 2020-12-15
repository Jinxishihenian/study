import React, {Component} from 'react';
import './searchBar.css'
class SearchBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {callBack} = this.props;
        return (
            <div className="search-bar">
                <input type="text" onChange={callBack}/>
            </div>
        );
    }
}

export default SearchBar;
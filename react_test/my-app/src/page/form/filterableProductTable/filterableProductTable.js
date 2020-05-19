import React, {Component} from 'react';
import SearchBar from "../searchBar/searchBar";
import ProductTable from "../productTable/productTable";

class FilterableProductTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'filterText':"",
            'inStockOnly':false,
        };
        // 模拟请求数据.
        this.virtual = [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
        ];
    }
    render() {
        return (
            <div>
                <SearchBar></SearchBar>
                <ProductTable tables={this.virtual}></ProductTable>
            </div>
        );
    }
}

export default FilterableProductTable;
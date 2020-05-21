import React, {Component} from 'react';
import ProductRow from "../productRow/productRow";
import ProductCategoryRow from "../productCategoryRow/productCategoryRow";

class ProductTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {tables} = this.props;
        const tableObj = {};
        const tableArray = [];
        tables.map((value) => {
            if (tableObj[`${value["category"]}`] == null) {
                tableObj[`${value["category"]}`] = [];
                tableObj[`${value["category"]}`].unshift(value);
            } else if (tableObj[`${value["category"]}`] != null) {
                tableObj[`${value["category"]}`].unshift(value);
            }
        });
        for(let key in tableObj){
            tableArray.unshift({title:key,value:tableObj[key]});
        }
        const listItems = tableArray.map((value) => {
            let rowValue = value["value"];
            let rowTitle = value["title"];
            let row = rowValue.map((rowValue) => {
                return  (
                    <ProductCategoryRow
                        category={rowValue["name"]}
                        price={rowValue["price"]}>
                    </ProductCategoryRow>
                )
            });

            return <div><ProductRow category={rowTitle} price="价格"/>{row}</div>
        });
        return (
            <div>
                {listItems}
            </div>
        );
    }
}

export default ProductTable;
import React, {Component} from 'react';
import ProductRow from "../productRow/productRow";
import ProductCategoryRow from "../productCategoryRow/productCategoryRow";

class ProductTable extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }


    render() {
        const {tables} = this.props;
        const tableObj = {};
        const tableArray = [];
        tables.map((value) => {
            let tables = tableObj[`${value["category"]}`];
            if (tables == null) {
                tables = [];
                tables.unshift(value);
            } else if (tables != null) {
                tables.unshift(value);
            }
        });
        for(let key in tableObj){
            console.log(key + '---' + tableObj[key].length);
            tableArray.unshift({title:key,value:tableObj});
        }
        const listItems = tableArray.map((value) => {
            return <div><ProductRow category="商品标题" price="价格"/><div>{
                value['value'].map((value) => {
                    return <ProductCategoryRow category="模拟名称" price="模拟价格"></ProductCategoryRow>
                })
            }</div></div>
        });
        return (
            <div>
                <ProductRow category="商品标题" price="价格"/>
                <ProductCategoryRow category="模拟名称" price="模拟价格"></ProductCategoryRow>
            </div>
        );
    }
}

export default ProductTable;
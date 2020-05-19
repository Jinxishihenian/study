import React, {Component} from 'react';
import './productCategoryRow.css';

class ProductCategoryRow extends Component {
    constructor(props){
        super(props);
    };
    render() {
        const {category,price} =this.props;
        return (
            <div className="product-category-row">
                <span>{category}  {price}</span>
            </div>
        );
    }
}

ProductCategoryRow.propTypes = {};

export default ProductCategoryRow;
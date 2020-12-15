import React, {Component} from 'react';
import './productRow.css'
class ProductRow extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {category,price} =this.props;
        return (
            <div className="product-row">
                <h1>{category}  {price}</h1>
            </div>
        );
    }
}

export default ProductRow;
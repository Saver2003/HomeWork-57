import React from 'react';

const Product = props => {
    return (
        <div>{props.product} {props.price}
            <button onClick={() => props.remove(props.id)}>Delete</button>
        </div>
    )
};

export default Product;
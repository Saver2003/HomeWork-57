import React from 'react';
import Product from "../Product/Product";

const Goods = props => {
    return (
        <div>
            {props.goods.map((goods) => {
                return <Product product={goods.product} price={goods.price + ' KGS'} key={goods.id} id={goods.id} remove={props.remove}/>
            })}
        </div>
    )
};

export default Goods;
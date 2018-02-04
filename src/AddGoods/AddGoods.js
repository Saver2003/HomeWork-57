import React from 'react';

const AddGoods = props => {
    return (
        <div>
            <p>
                <input placeholder="Add Goods" onChange={props.changeText}/>
                <input placeholder="Add Price" onChange={props.changePrice}/> KGS
                <button onClick={props.click}>Add</button>
            </p>
        </div>
    )
};

export default AddGoods;
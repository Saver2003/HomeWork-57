import React, {Component} from 'react';
import './App.css';
import AddGoods from "./AddGoods/AddGoods";
import Goods from "./Goods/Goods";

class App extends Component {
    state = {
        goods: [
            {product: 'Bottle of water', price: 25, id: 1},
            {product: 'Milk', price: 40, id: 2},
        ],
        textInput: '',
        priceInput: '',
        totalSpent: '',
    };
    
    changeText = (event) => {
        this.setState({textInput: event.target.value})
    };
    
    changePrice = (event) => {
        this.setState({priceInput: event.target.value})
    };
    
    addGoods = () => {
        if (this.state.textInput === '' || isNaN(this.state.priceInput)) {
            return
        } else {
            const newGoods = {product: this.state.textInput, price: this.state.priceInput, id: Date.now()};
            const goods = [...this.state.goods];
            goods.push(newGoods);
            
            this.setState({goods: goods});
        }
    };
    
    removeProduct = (id) => {
        const index = this.state.goods.findIndex(button => button.id === id);
        const goods = [...this.state.goods];
        goods.splice(index, 1);
        
        this.setState({goods: goods});
    };
    
    
    
    render() {
        return (
            <div className="App">
                <AddGoods click={this.addGoods} changeText={this.changeText} changePrice={this.changePrice}/>
                <Goods goods={this.state.goods} remove={this.removeProduct}/>
            </div>
        );
    }
}

export default App;

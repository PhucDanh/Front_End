import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src="img/p13.jpg" alt />
                    <p>My product is the best</p>
                    <p>XL/XXL/S</p>
                    <p><span>$100.00</span> $70.00</p>
                    <button>Add to cart</button>
                </div>
            </div>
        )
    }
}

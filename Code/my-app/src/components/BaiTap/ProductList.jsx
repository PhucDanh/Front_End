import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    render() {
        return (
            <div id="product">
                <h1>New Products</h1>
                <div className="product-items">
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </div>
            </div>

        )
    }
}

import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <div className="header_1">
                    <div className="left">
                        <p>Help <i className="fal fa-mobile" /> 01634640124</p>
                    </div>
                    <div className="right">
                        <ul>
                            <li><a href="#">Checkout</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Account</a></li>
                        </ul>
                    </div>
                </div>
                <div className="header_2">
                    <div className="home-btn">
                        <h1><a href="#">New Shop</a></h1>
                    </div>
                    <div className="left">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Woman</a></li>
                            <li><a href="#">Man</a></li>
                            <li><a href="#">Short Code</a></li>
                            <li><a href="#">Mail Us</a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <p>$0.00 (0 items) <i className="fal fa-shopping-cart" /></p>
                        <p>Empty Cart</p>
                    </div>
                </div>
            </div>

        )
    }
}

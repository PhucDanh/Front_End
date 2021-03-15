import React, { Component } from 'react'

export default class Information extends Component {
    render() {
        return (
            <div id="information">
                <div className="intro">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem praesentium
                    odit perspiciatis assumenda nemo ex id veritatis sit possimus quas, aliquam, rerum
      eaque sint labore libero voluptatem. Omnis, maiores quisquam.</p>
                </div>
                <div className="account">
                    <h1>My Account</h1>
                    <ul>
                        <li><a href="#">Check out</a></li>
                        <li><a href="#">Log in</a></li>
                        <li><a href="#">Create account</a></li>
                    </ul>
                </div>
                <div className="infor">
                    <h1>Information</h1>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Short Codes</a></li>
                        <li><a href="#">Mail Us</a></li>
                    </ul>
                </div>
                <div className="contact">
                    <h1>Contact</h1>
                    <p><i className="fas fa-map-marker" /> 296 Võ Thành Trang</p>
                    <p><i className="fas fa-phone" /> 01634643124</p>
                    <p><i className="fal fa-envelope" /> Dangtrunghieu@gmail.com</p>
                </div>
            </div>

        )
    }
}

import React, { Component } from 'react'

export default class Trend extends Component {
    render() {
        return (
            <div id="trend">
                <h1>Latest Fashion Trend</h1>
                <div className="trend-items">
                    <div className="trend-item item1">
                        <img src="./img/l1.jpg" alt />
                        <p>50%</p>
                        <p>Men</p>
                    </div>
                    <div className="trend-item item2">
                        <img src="./img/l2.jpg" alt />
                        <p>50%</p>
                        <p>Men</p>
                    </div>
                    <div className="trend-item item3">
                        <img src="./img/l3.jpg" alt />
                        <p>50%</p>
                        <p>Men</p>
                    </div>
                    <div className="trend-item item4">
                        <img src="./img/l4.jpg" alt />
                        <p>50%</p>
                        <p>Men</p>
                    </div>
                    <div className="trend-item item5">
                        <img src="./img/l5.jpg" alt />
                        <p>50%</p>
                        <p>Men</p>
                    </div>
                    <div className="trend-item item6">
                        <img src="./img/l6.jpg" alt />
                        <p>50%</p>
                        <p>Men</p>
                    </div>
                </div>
            </div>

        )
    }
}

import React, { Component } from 'react'

export default class Databinding extends Component {
    name = "frontend";

    renderSinhVien = () => {
        let sinhVien = {
            ma: 1,
            ten: "Phuc Danh"
        }
        return (
            <div>
                <p>Ma: {sinhVien.ma}</p>
                <p>Ten: {sinhVien.ten}</p>
            </div>
        );
    }
    
    renderInput = (name) => {
        return(
            <div>
                <p>{name}</p>
            </div>
        )
    }

    render() {
        let title = "Ngo Phuc Danh";
        let renderTitle = () => {
            return(
                <div>
                    {title}
                </div>
            )
        }

        return (
            <div className="container">
                <h1>Databinding</h1>
                <p id="title" className="display-4">{renderTitle()}</p>
                <p>{this.name}</p>
                {this.renderSinhVien()}
                {this.renderInput("danh")}
            </div>
        )
    }
}

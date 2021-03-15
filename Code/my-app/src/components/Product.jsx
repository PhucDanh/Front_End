import React, { Component } from 'react'

export default class Product extends Component {
    //Properties
    //Method
    render() {

        // Nội dung thẻ được định nghĩa trong hàm render
        return (
            <div className="card text-white bg-primary">
                <img className="card-img-top" src="holder.js/100px180/" alt />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>
            // <div class="card text-white bg-primary">
            //   <img class="card-img-top" src="holder.js/100px180/" alt=""></img>
            //   <div class="card-body"> 
            //     <h4 class="card-title">Title</h4>
            //     <p class="card-text">Text</p>
            //   </div>
            // </div>
        )
    }
}

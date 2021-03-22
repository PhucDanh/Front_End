import React, { Component } from 'react'
import Carousel from './Carousel'
import Discount from './Discount'
import Footer from './Footer'
import Header from './Header'
import Information from './Information'
import Introduce from './Introduce'
import ProductList from './ProductList'
import Trend from './Trend'
// import Product from './ProductList'

export default class BaiTapComponent extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Carousel></Carousel>
                <Introduce></Introduce>
                <ProductList></ProductList>
                <Discount></Discount>
                <Trend></Trend>
                <Information></Information>
                <Footer></Footer>
                {/* <Databinding></Databinding> */}
            </div>
        )
    }
}

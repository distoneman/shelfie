import React, { Component } from 'react'
import axios from 'axios';
import Product from '../product/product.js'


class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){

        return(
            <div>
                <div>Dashboard</div>
                <Product />
            </div>
        )
    }
}

export default Dashboard;
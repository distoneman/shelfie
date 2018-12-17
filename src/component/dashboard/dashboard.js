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
        console.log(this.state.products)
        let displayList = this.props.list.map(product => {
            return(
                <div>{product.product_name}</div>
            )
        })
        
        return(

            <div>
                <div>Dashboard</div>
                <Product />
                {displayList}
            </div>
        )
    }
}

export default Dashboard;
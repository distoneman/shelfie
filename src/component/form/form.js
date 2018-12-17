import React, { Component } from 'react'
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            products: [],
            productName: '',
            productPrice: '',
            imageUrl: ''
        }
        // this.cancelInput = this.cancelInput.bind(this);
    }

    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
    }

    cancelInput(){
        console.log('cancel button pushed')
        this.setState({
            productName:'',
            productPrice: '',
            imageUrl: ''
        })
    }

    addNewProduct(e){
        e.preventDefault()
        console.log('add product function')
        let newProduct = {
            productName: this.state.productName,
            productPrice: this.state.productPrice,
            imageUrl: this.state.imageUrl
        }
        console.log(newProduct)
        axios.post('/api/product', newProduct)
            .then((res) => {
                this.setState({
                    products: res.data
                })
            })
    }

    render(){

        return(
            <div>
                <div>Form</div>
                <form>
                    <input type="text" placeholder='Product Name'
                        onChange={(e) => this.handleChange('productName', e.target.value)}/>
                    <input type="text" placeholder='Product Price'
                        onChange={(e) => this.handleChange('productPrice', e.target.value)} />
                    <input type="text" placeholder='Image URL'
                        onChange={(e) => this.handleChange('imageUrl', e.target.value)} />
                    <button id='btnCancel'
                            onClick={() => this.cancelInput()}>Cancel</button>
                    <button id="btnAdd"
                            onClick={(e) => this.addNewProduct(e)}>Add New Product
                    </button>
                </form>

            </div>
        )
    }
}

export default Form;
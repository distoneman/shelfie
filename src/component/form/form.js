import React, { Component } from 'react'
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            productName: '',
            productPrice: '',
            productUrl: ''
        }
    }

    handleChange(prop, val){
        console.log('handleChange function')
        console.log(val)
        this.setState({
            [prop]: val
        })
    }

    cancelInput(){
        console.log('cancel button pushed')
        this.setState({
            productName:'',
            productPrice: '',
            productUrl: ''
        })
    }

    addNewProduct(){
        console.log('add product function')
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
                    <input type="text" placeholder='Product URL'
                        onChange={(e) => this.handleChange('productURL', e.target.value)} />
                    <button id='btnCancel'
                            onClick={() => this.cancelInput()}>Cancel</button>
                    <button id="btnAdd"
                            onClick={() => this.addNewProduct()}>Add New Product
                    </button>
                </form>

            </div>
        )
    }
}

export default Form;
import React, { useContext } from "react"
import { shopContext } from "../../contexts/shop-context"

export const Product=(props)=>{
    const {id, productName,price,productImage} = props.data

    const {addToCart, cartItems} = useContext(shopContext)

    const cartItemAmount = cartItems[id]

    return <div className="product">
        <img src={productImage} alt="" />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>Rs. {price}</p>
        </div>
       <button className="addToCartBttn" onClick={()=>addToCart(id)}>Add to Cart{cartItemAmount>0 && <> ({cartItemAmount})</>}</button>
        
    </div>
}
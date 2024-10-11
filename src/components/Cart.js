import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increaseQuantity,decreaseQuantity,removeFromCart } from '../features/cart/cartSlice'


const Cart = () => {
    const cartItems = useSelector((state)=>state.cart.items)
    const dispatch = useDispatch()

    const handleIncrease=(id)=>{
        dispatch(increaseQuantity(id))
    }

    const handleDecrease = (id)=>{
        dispatch(decreaseQuantity(id))
    }
    const handleRemove=(id)=>{
        dispatch(removeFromCart(id))
    }

  return (
    <div>
        <h2>Your Cart</h2>
        {cartItems.length === 0?(
            <p>Your cart is empty</p>
        ):(
            cartItems.map(item=>(
                <div key={item.id} >
                    <img src={item.image}/>
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                        <p>quantity:{item.quantity}</p>
                        <button onClick={()=>handleIncrease(item.id)}>Increase</button>
                        <button onClick={()=>handleDecrease(item.id)}>Decrease</button>
                        <button onClick={()=>handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))
        )}
    </div>
  )
}

export default Cart
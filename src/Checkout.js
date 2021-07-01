import React , {forwardRef} from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import {useStateValue} from './StateProvider'
import BasketItem from './BasketItem'
import FlipMove from 'react-flip-move';
import {useHistory} from 'react-router-dom'


function Checkout() {

    const [{basket},dispatch] = useStateValue();
    const history = useHistory();
    
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg" alt="" className="checkout__ad" />
                <div className="checkout__items">
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    <FlipMove>
                        {basket?.map((item,index) =>(
                    
                            <BasketItem  key={index} item={item} index={index} />
                        ))}
                    </FlipMove>
                   
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout

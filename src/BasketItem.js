
import './BasketItem.css'
import {useStateValue} from './StateProvider'
import React, { forwardRef } from 'react';
import { useAlert } from 'react-alert';

function BasketItem({item,index,hideButton},ref) {
    const [state,dispatch] = useStateValue();
    const alert = useAlert();
    const removeFromBasket = () =>{
        dispatch({type:"REMOVE_FROM_BASKET",index:index})
        alert.show(<div style={{ textTransform: 'initial' }}>{item.title} is removed from basket.</div>)

    }
    return (
        <div className="basket__item" ref= {ref} key={index}>
            <img src={item.image} className="basket__item__image" alt="" />
            <div className="basket__item__info">
                <p className="basket__item__title">{item.title}</p>
                <p className="basket__item__price">
                   <span>$</span>
                   <strong>{item.price}</strong> 
                </p>
                <div className="basket__item__rating">
                    {Array(item.rating).fill().map((_,i)=>(
                        <p>🌟 </p>
                    ))}
                </div>
                {!hideButton && (<button onClick = {removeFromBasket}>Remove from basket</button>)}
                
            </div>          
        </div>
    )
}

export default forwardRef(BasketItem)

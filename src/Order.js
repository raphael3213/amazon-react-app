import React from 'react'
import './Order.css'
import moment from 'moment'
import BasketItem from './BasketItem'
import CurrencyFormat from 'react-currency-format'

function Order({order}) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            <div className="order__items">
                {order.data.basket?.map((item,index) => (
                    <BasketItem  key={index} item={item} index={index} hideButton = {true} />
                ))}
            </div>
            

            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">
                        Order Total : {value} 
                    </h3>
                )}
                decimalScale={2}
                value={order.data.amount/100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Order

import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import {useStateValue } from './StateProvider'
import {getBasketTotal} from './reducer'
import { useAlert } from 'react-alert';
import {useHistory} from 'react-router-dom'

function Subtotal() {

    const [state,dispatch] = useStateValue();
    const alert = useAlert();
    const history = useHistory();
    // let totalPrice = 0;
    // state.basket.map((item)=>{
    //     totalPrice += item.price 
    // });
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal({state.basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(state.basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={event => (state.user? history.push('/payment'): (alert.error(<div style={{ textTransform: 'initial' }}>Login to place order</div>) && history.push('/login')))}>Proceed to Checkout</button>

        </div>
    )
}

export default Subtotal

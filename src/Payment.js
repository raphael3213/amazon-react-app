import React,{useState,useEffect} from 'react'
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from './reducer'
import './Payment.css'
import { useStateValue } from './StateProvider'
import BasketItem from './BasketItem'
import FlipMove from 'react-flip-move';
import {Link , useHistory} from 'react-router-dom';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import axios from './axios';
import {db} from './firebase';
import { useAlert } from 'react-alert';
function Payment() {
    const [{basket,user},dispatch] = useStateValue();
    const [error,setError] = React.useState(null);
    const [processing,setProcessing] = React.useState("");
    const [disabled,setDisabled] = React.useState(true);
    const [succeeded,setSucceeded] = React.useState(false);
    const [clientSecret,setClientSecret] = React.useState(true);
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    const alert = useAlert();


    useEffect(() => {
        console.log("hello")
        const getClientSecret = async () =>{
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket)*100}`
            })
            console.log(response)
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    }, [basket]);

    console.log('The secret is >>>',clientSecret)

    const handleSubmit = async function (event){
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            alert.show(<div style={{ textTransform: 'initial' }}>Order Placed</div>)

            history.replace('/orders');

            dispatch({
                type:"EMPTY_BASKET"
            })

            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket:basket,
                amount:paymentIntent.amount,
                created:paymentIntent.created
            })
        })
        // const payload = await stripe

    }
    const handleChange = function (event){

        setDisabled(event.empty);
        setError(event.error? event.error.message : "")

    }
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout(<Link to="/checkout">{basket.length} items </Link>)</h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <h3>{user?.email}</h3>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items for Delivery</h3>
                    </div>
                    <div className="payment__items">
                        <FlipMove>
                            {basket?.map((item,index) =>(
                        
                                <BasketItem  key={index} item={item} index={index} />
                            ))}
                        </FlipMove>
                    </div>
                    
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={event => (handleSubmit(event))}>
                            <CardElement onChange={event => (handleChange(event))}/>
                            <div className="payment__priceContainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>
                                       Order Total : {value} 
                                    </h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>
                                    {processing? <p>Processing</p> : <p>Buy Now</p>}
                                </span>
                            </button>
                            </div>
                            {error && <div> { error } </div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment

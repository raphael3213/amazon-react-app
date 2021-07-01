import './HomeItem.css'

import React from 'react'
import { useStateValue } from './StateProvider'

function HomeItem() {

    const [state,dispatch] = useStateValue();
    return (
        <div className="home__item">
            <div className="home__item__left">
                <img className="home__item__left__image" src={state.item?.image} alt="" />
            </div>
            <div className="home__item__right">

                <div className="home__item__rl">
                    <h2 className="home__item__rl__title" >{state.item?.title}</h2>
                    <div className="home__item__rl__rating">
                        {Array(state.item?.rating).fill().map((_,i)=>(
                            <p>🌟 </p>
                        ))}
                     </div>
                     <hr />
                     <div className="home__item__rl__price">{'\n'}
                        <div>
                            <span>Price:</span> <strong>${state.item?.price}{"\n"}</strong>
                        </div>
                        <div>
                            <span>Inclusive of all taxes{"\n"}</span>
                        </div>
                        
                        
                    </div>
                    <div className="home__item__rl__delivery">
                        <div>
                            <span>FREE delivery:</span> <strong>Wednesday, June 16 {"\n"}</strong>
                        </div>
                        <div>
                            <span>Fastest delivery:</span> <strong>Tomorrow{"\n"}</strong>
                        </div>
                        <div>
                            <span>Order within 2 hrs and 44 mins{"\n"}</span>
                        </div>
                        
                        
                        
                    </div>
                    <div className="home__item__rl__description">
                        
                        <p>{state.item?.description}</p>
                        
                    </div>
                     
                </div>
                <div className="home__item__rr">
                    <div className="home_item_rr_box1">

                    </div>
                    <div className="home_item_rr_box2">
                        
                    </div>
                </div>


            </div>
            
        </div>
    )
}

export default HomeItem

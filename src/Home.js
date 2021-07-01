import React from 'react';
import './Home.css';
import Product from './Product';
import products from './catalog';


function Home() {

    
    return (
        <div className="home">
            <div className="home__container">
            <img className="home__image" src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Tablets/Samsung/A7-Lite/Gateway/D24267156_IN_PC_Tablets-Samsung-Launch-A7-Lite-RUSH_TallHero_1500x600._CB667709440_.jpg'></img>
                <div className="home__row">
                    <Product title= {products[0].name} description= {products[0].description} price = {products[0].price} rating={products[0].rating} image= {products[0].img} key= {products[0].id}/>
                    <Product title= {products[1].name} description= {products[1].description} price = {products[1].price} rating={products[1].rating} image= {products[1].img} key= {products[1].id}/>
                </div>
                <div className="home__row">
                    <Product title= {products[2].name} description= {products[2].description} price = {products[2].price} rating={products[2].rating} image= {products[2].img} key= {products[2].id}/>
                    <Product title= {products[3].name} description= {products[3].description} price = {products[3].price} rating={products[3].rating} image= {products[3].img} key= {products[3].id}/>
                    <Product title= {products[4].name} description= {products[4].description} price = {products[4].price} rating={products[4].rating} image= {products[4].img} key= {products[4].id}/>                    
                </div>
                <div className="home__row">
                    
                    <Product title= {products[5].name} description= {products[5].description} price = {products[5].price} rating={products[5].rating} image= {products[5].img} key= {products[5].id}/>                    
                </div>
            </div>
        </div>
    )
}

export default Home

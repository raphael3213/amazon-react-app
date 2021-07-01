import React from 'react'
import './Product.css'
import {useStateValue} from './StateProvider'
import { useAlert } from 'react-alert';
import Modal from 'react-modal';
import HomeItem from './HomeItem'
import { Link } from 'react-router-dom';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : '2%',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background: "#ffffff"
  },
  overlay: {
    zIndex: 1000
  }
};

Modal.setAppElement('body');

function Product({title,price,rating,image,description}) {
    const [state,dispatch] = useStateValue();
    const alert = useAlert();
    const addToBasket = (event) =>{
        event.cancelBubble = true;
        event.stopPropagation();
        console.log("In add to basket");
        alert.success(<div style={{ textTransform: 'initial' }}>{title} is added to cart.</div>)
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                title:title,
                image:image,
                price:price,
                rating: rating
            }
        })

    }
    const setCurrentItem = function(event){
        console.log('event---->',event)
        dispatch({
            type:'SET_ITEM',
            item:{
                title:title,
                image:image,
                price:price,
                rating: rating,
                description: description
            }
        })
    }
    // const [modalIsOpen,setIsOpen] = React.useState(false);

    
    // function openModal(event) {
    //     event.cancelBubble = true;
    //     event.stopPropagation();
    //     setIsOpen(true);
    //     document.body.style.overflow = 'hidden';
    // }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
        
    // }

    // function closeModal(e){
    //     e.stopPropagation();
    //     setIsOpen(false);
    //     document.body.style.overflow = 'unset';
    // }


    return (
        
            <div className="product" id="product">
                <div className="product__info">
                    <p>{title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(rating).fill().map((_,i)=>(
                            <p>🌟 </p>
                        ))}
                    </div>
                </div>
                <Link to="/item" onClick={event=> (setCurrentItem())} >
                    <img className="product__image" src={image} ></img>
                </Link>
             
            <button onClick={event => (addToBasket(event))} >Add to Basket</button>
            {/* <button >Add to Basket</button> */}
            {/* <Modal style="z-index:1000;"
            isOpen={modalIsOpen}
            closeTimeoutMS={500}
            scrollable={true}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
                <button style={{float:"right"}} onClick={event => (closeModal(event))}>X</button>
                <HomeItem title={title} price={price} rating={rating} image={image} description={description} ></HomeItem>

                
            </Modal> */}
            </div>
        
       
    )
}

export default Product

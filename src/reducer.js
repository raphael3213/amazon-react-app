export const initialState = {
    basket: [],
    user: null,
    item: null
};


export const getBasketTotal = (basket) => 
    basket?.reduce((amount,item) => item.price+amount,0 );
   





const reducer = (state,action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket,action.item]
            }

        case 'REMOVE_FROM_BASKET':{
            state.basket.splice(action.index,1)
            return{
                ...state,
                basket: state.basket
            }

        }
        case 'EMPTY_BASKET' :{
            return {
                ...state,
                basket: []
            }
        }


        case 'SET_USER':{
            return {
                ...state,
                user: action.user
            }
        }
        case 'SET_ITEM':{
            return {
                ...state,
                item: action.item
            }
        }
        
        default:
            return state;

    }
}

export default reducer;
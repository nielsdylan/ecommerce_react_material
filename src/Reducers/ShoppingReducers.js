import { TYPES } from "../Actions/ShoppingAction";

export const shoppingInitialState = {
    products:[],
    cart:[],
    quantity:null
}
export function ShoppingReducers(state, action) { 
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            let newItem = action.data.find(
                (product)=> product.product_id === action.payload
            );
            let itemInCart = state.cart.find(
                (item)=> item.product_id === newItem.product_id
            );
            return itemInCart ? {
                ...state,
                cart: state.cart.map((item)=>
                item.product_id===newItem.product_id 
                    ? {...item,quantity:item.quantity+1} 
                    :item
                ),
                quantity:state.quantity+1,
            } : {
                ...state,
                cart:[...state.cart, {...newItem, quantity:1 }],
                quantity:state.quantity+1,
            }
        }
        case TYPES.REMOVE_ONE_FROM_CART:{

        }
        case TYPES.REMOVE_ALL_FROM_CART:{

        }
        case TYPES.CLEAR_CART:{

        }
            
        default:
            return state;
    }
 }
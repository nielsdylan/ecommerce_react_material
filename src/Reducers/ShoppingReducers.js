import { TYPES } from "../Actions/ShoppingAction";

export const shoppingInitialState = {
    products:[
        {id: 1, name:"producto1", price:100},
        {id: 2, name:"producto1", price:200},
        {id: 3, name:"producto1", price:300},
        {id: 4, name:"producto1", price:400}
    ],
    cart:[]
}
export function ShoppingReducers(state, action) { 
    switch (action.type) {
        case TYPES.ADD_TO_CART:{

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
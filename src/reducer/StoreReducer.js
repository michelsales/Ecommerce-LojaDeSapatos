import {createContext} from 'react';

export const ContextReducer = createContext();

export const initialState = { 
    title: 'oi',
    stockActual: {
        id: 0,
        amount: 0,
    },
    products: {
        id: 0,
        title: '',
        price: 0,
        image: '',
        amount: 0,
    },
    cart: { 
        ValueTotal: 0, 
        products: [],
    }
}

export const StoreReducer = (state, action) => {
    switch (action.type) {  
        case 'SET_ITEMSCARD':
        return {...state, cart: action.payload }
        case 'SET_ITEMS_STOCK':
        return {...state, stockActual: action.payload }
        default: 
            return state;
    }
}

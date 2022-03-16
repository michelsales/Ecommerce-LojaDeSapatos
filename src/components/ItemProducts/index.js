import React, { useContext, useEffect, useState } from 'react';
import {BsCartPlus} from 'react-icons/bs';
import { ContextReducer } from '../../reducer/StoreReducer';

import { Container, ContainerButton, Infos, ButtonAdd, WrapperInfos } from './styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemProducts = (props) => {
    const { state, dispatch} = useContext(ContextReducer);
    const [stockAmount, setStockAmount] = useState(0);
    const [productActual, setProductActual] = useState(1);

    useEffect(() => {
      fetch(`http://localhost:3000/stock/${productActual}`)
      .then( response => response.json())
      .then(data => setStockAmount(data));
    },[productActual]);
    
    
    
    const handleErrorAmount = () => {
      toast.warning('Estoque insuficiente para essa quantidade!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    
    const renderToastify = () => {
      return(
        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        )
      }
      
      
  const handleAddCart = (product) => {
    const _cart = { ...state.cart}
    let productExist = false;
    
    setProductActual(product.id);
    
    for(let obj in _cart.products){
      if(_cart.products[obj].id === product.id){
        productExist = true;
      }
    }

        
    if(productExist){
    for(let obj in _cart.products){
      if(_cart.products[obj].id === product.id){
        if( stockAmount.amount > _cart.products[obj].amount){
            _cart.products[obj].amount += 1;
            console.log('entrei aqui');
            dispatch({
              type: 'SET_ITEMSCARD',
              payload: _cart,
            })
        } else {
            handleErrorAmount();
            return;
        }
      }
    }
  } else { 
      product.amount = 1;
      _cart.products.push(product);
      console.log('carrinho:', _cart.products);

      dispatch({
        type: 'SET_ITEMSCARD',
        payload: _cart,
      })
  }
}

const renderAmount = () => { 
  for(let obj in state.cart.products){
    if(state.cart.products[obj].id === props.product.id){
      return state.cart.products[obj].amount
    }
  }
  return 0;
}

  return (
      <Container>
          {renderToastify()}
          <img src={props.product.image} alt={props.product.title} />
          <WrapperInfos>
            <p>{props.product.title}</p>
            <h2>{props.product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
          </WrapperInfos>
          <ContainerButton>
            <Infos>
                <BsCartPlus />
                <span>{renderAmount()}</span>
            </Infos>
            <ButtonAdd onClick={() => handleAddCart(props.product)}>ADICIONAR AO CARRINHO</ButtonAdd>
          </ContainerButton>
      </Container>
  );
}

export default ItemProducts;
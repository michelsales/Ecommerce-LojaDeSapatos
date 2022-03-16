import React, { useContext, useState } from 'react';
import Header from '../../components/Header';
import ItemCart from '../../components/ItemCart';
import { ContextReducer } from '../../reducer/StoreReducer';
import { Container, WrapperCart, WrapperBottom, ButtonFInished } from './styles';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  const {state, dispatch} = useContext(ContextReducer);
  const [productsCart, setProductsCart] = useState([]);
  
  const renderFinished = () => {
    toast.success('Compra feita com sucesso!', {
      position: "top-right",
      autoClose: 5000,
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

  const handleTotal = ()  => {
    const _cart = { ...state.cart}
    let soma = 0;
    let total = 0;
    for(let obj in _cart.products){
      soma = (_cart.products[obj].price * _cart.products[obj].amount);
      total += soma;
    }

    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  const renderFinally = () => {
    if(state.cart.products.length > 0){
      return (
          <WrapperBottom>
            <ButtonFInished onClick={renderFinished}>Finalizar Pedido</ButtonFInished>
            <span>Total: {handleTotal()}</span>
          </WrapperBottom>
      );
    } else { 
      return <h3>Ainda não possui nenhum produto no carrinho!</h3>
    }
  }

  const renderItems = () => {
      return(
        state.cart.products.map(product => 
          <ItemCart key={product.id} product={product} />
          )
      );
  }
    
  return(
    <Container>
      {renderToastify()}
      <Header />
      <WrapperCart>
        <h1>Carrinho: </h1>
        {renderItems()}
        {renderFinally()}
      </WrapperCart>
    </Container>
    ); 
}

export default Cart;
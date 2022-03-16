import React, { useContext, useEffect, useState } from 'react';
import { ContextReducer } from '../../reducer/StoreReducer';
import { BsTrash } from 'react-icons/bs';
import { Container, ButtonADD, InputNumber } from './styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCart = (props) =>  {
  const { state, dispatch } = useContext(ContextReducer);
  const [stock, setStock] = useState({});
  
  useEffect(() => {
    fetch('http://localhost:3000/stock')
    .then(response => response.json())
    .then(data => setStock(data));
    
    dispatch({
      type: 'SET_ITEMS_STOCK',
      payload: stock,
    })
  }, []);


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
    

  const handleRemoveItem = (product) => { 
    const _cart = { ...state.cart}
    
    for(let obj in _cart.products){
      console.log('amount:', _cart.products[obj].amount)
      if((_cart.products[obj].id === product.id) && (_cart.products[obj].amount > 1)){
        _cart.products[obj].amount -= 1;
      } else if(_cart.products[obj].id === product.id){ 
        delete _cart.products[obj];
      }
    }
    dispatch({
      type: 'SET_ITEMSCARD',
      payload: _cart,
    })
  }
  
  const handleTrash = (product) => {
    const _cart = { ...state.cart}
    for(let obj in _cart.products){
      if(_cart.products[obj].id === product.id){
        delete _cart.products[obj];
      }
    }
    dispatch({
      type: 'SET_ITEMSCARD',
      payload: _cart,
    })
  }

  const handleAddItem = (product) => {
  
    const _cart = { ...state.cart}
    for(let obj in _cart.products){
      console.log('amount state:', stock[obj].id);
      console.log('id state:',  state.stockActual.id);
      if(_cart.products[obj].id === product.id){
        if(stock[obj].id === _cart.products[obj].id && stock[obj].amount > _cart.products[obj].amount){
          _cart.products[obj].amount += 1;
        }else {
          handleErrorAmount();
        } 
      }     
    }
    dispatch({
      type: 'SET_ITEMSCARD',
      payload: _cart,
    })
  }

  return(
    <>
      {renderToastify()}
      <Container>
          <table>
              <thead>
                  <tr>
                  <th></th>
                  <th>Produto:</th>
                  <th>Quantidade:</th>
                  <th>Subtotal:</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td><img src={props.product.image} alt={props.product.description}/></td>
                    <td>{props.product.title}</td>
                    <td><ButtonADD onClick={() => handleRemoveItem(props.product)}>-</ButtonADD><InputNumber type="number"  onChange={() => {}} disabled value={props.product.amount}/><ButtonADD onClick={() => handleAddItem(props.product)}>+</ButtonADD></td>
                    <td>{props.product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td><BsTrash onClick={() => handleTrash(props.product)}/></td>
                  </tr>
              </tbody>
          </table>
      </Container>
    </>
  );
}
export default ItemCart;
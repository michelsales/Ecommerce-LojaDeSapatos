import React, { useContext } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import Logo from '../../assets/tennis.png';
import { Container, WrapperLogo, WrapperCard, WrapperItems } from './styles';
import { ContextReducer } from '../../reducer/StoreReducer';
import { Link } from 'react-router-dom';

const Header = () => {
  const { state, dispatch} = useContext(ContextReducer);
  return(
    <Container>
      <Link to="/">
        <WrapperLogo>
            <h1>MICHELSHOES</h1>
            <img src={Logo} alt="Logo loja"/>
        </WrapperLogo>
      </Link>
        <WrapperCard>
            <Link to="/carrinho">
              <WrapperItems>
                <h4>Meu carrinho: </h4>
                <span>{state.cart.products.length}<span> items</span></span>
                {console.log('carrinho length', state?.cart?.products)}
              </WrapperItems>
            </Link>
            <MdShoppingCart />
        </WrapperCard>
        
    </Container>
  );
}

export default Header;
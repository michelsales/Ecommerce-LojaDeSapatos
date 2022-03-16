import React, { useEffect, useState } from 'react';
import ItemProducts from '../ItemProducts';

import { Container } from './styles';

const Products = () => { 
    const [ products, setProducts] = useState([]);
    
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => setProducts(data));
        }, 200)
    }, []);
    
    const renderItemProducts = () => {
        while(products.length === 0){
            return(
                <h1>Carregando...</h1>
            );
        }
        return (
            products.map(product => 
                <ItemProducts key={product.id} product={product}/> 
            )
        )
    }

  return(
    <Container>
        {renderItemProducts()}
    </Container>
  ) 
}

export default Products;
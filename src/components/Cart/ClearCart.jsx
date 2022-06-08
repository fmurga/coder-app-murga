
import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContextProvider'
import { ButtonContainer } from '../buttons/ButtonContainer'
import Delete from '../icons/Delete';

const ClearCart = () => {
    const {clear} = useContext(CartContext);
  return (
    <ButtonContainer onClick={() => clear()}>
        <Delete /> Vaciar Carrito
    </ButtonContainer>
  )
}

export default ClearCart
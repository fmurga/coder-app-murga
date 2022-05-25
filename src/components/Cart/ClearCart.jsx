import { Delete } from '@mui/icons-material'
import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContextProvider'
import { ButtonContainer } from '../buttons/ButtonContainer'

const ClearCart = () => {
    const {clear} = useContext(CartContext);
  return (
    <ButtonContainer onClick={() => clear()}>
        <Delete /> Vaciar Carrito
    </ButtonContainer>
  )
}

export default ClearCart
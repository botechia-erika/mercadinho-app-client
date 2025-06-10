import {useContext, useEffect, useState} from 'react'
import { BsFillTrash3Fill } from "react-icons/bs";
import { AiTwotoneMinusCircle } from "react-icons/ai";
import { PiPlusCircleDuotone } from "react-icons/pi";
import { CartContainer } from '../../pages/CartPage/styled.CartPage'
import { Api1Context } from '../../common/context/api1-context'
import { URLAPI } from '../../common/constants/URLAPI';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios';
export default function Cart() {
   const {  
    setCart,
      cart, 
      removeItem, 
      emptyCart, 
      deleteOneUnit,
      getCartTotal,
      addPlus1
    } = useContext(Api1Context)
 
 

const [cart4Payment, setCart4Payment] = useState({
  total: getCartTotal(),
  productsList: Array.isArray(cart) ? [...cart] : [],
  buyerId: "000.000.000-00",
});

const handleCreatePurchase = async (event) => {
    event.preventDefault();

    const body = { ...cart4Payment };

    try {
        await axios.post(`${URLAPI}purchases`, body);

        // Adicione aqui a chamada do SweetAlert2 para exibir uma mensagem de sucesso.
        // Por exemplo:
        Swal.fire({
            title: 'Compra realizada com sucesso!',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
        });

   setCart([])
    } catch (error) {
        // Adicione aqui a chamada do SweetAlert2 para exibir uma mensagem de erro.
        // Por exemplo:
        Swal.fire({
            title: 'Erro ao efetuar a compra',
            text: 'Por favor, tente novamente mais tarde.',
            icon: 'error',
        });
        console.log(error.response);
    }
};

  useEffect(()=>{
    console.log(cart4Payment.buyerId)
  }, [cart4Payment.buyerId])

   return (
    <CartContainer>
<table>
    <thead>
      <tr>
        <td>Nome</td>
        <td>Preco</td>
        <td>Quantidade</td>
        <td>Preco Final</td>
      </tr>
      </thead>
      <tbody>
        {cart.map((cartItem)=>(
          <tr key={cartItem.id}>
            <td>{cartItem.item}</td>
            <td>{cartItem.price}</td>
            <td><button onClick={()=>{deleteOneUnit(cartItem.id)}}><AiTwotoneMinusCircle /></button>
              {cartItem.quantity}{cartItem.description}<button onClick={()=>{addPlus1(cartItem)}}><PiPlusCircleDuotone />
</button></td>
            <td>{cartItem.price * cartItem.quantity}</td>
            <td>
              <button className="deleteItem" onClick={()=>{removeItem(cartItem.id)}}>
                <BsFillTrash3Fill />
                </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>
            <button onClick={()=>{emptyCart()}}>Deletar Carrinho</button>
            </td>
            <td>
              VALOR TOTAL R$:{getCartTotal()}
            </td>
            <td>
              <input
                type={"text"}
                name="buyerId"
                id="buyerId"
                value={cart4Payment.buyerId}
                placeholder='CPF ou CNPJ CADASTRADO'
                onChange={(e)=>{setCart4Payment({...cart4Payment, buyerId: e.target.value})}}
                />
            </td>
            <td>
              <button onClick={handleCreatePurchase}>FINALIZAR COMPRA</button>
            </td>
        </tr>
      </tfoot>
</table>
   </CartContainer>
  )
}

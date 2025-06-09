import { createContext, useState, useEffect } from 'react';
import { URLAPI } from '../constants/URLAPI';
import { useRequestData } from '../../hooks/useRequestData';





import Swal from 'sweetalert2';

export const Api1Context = createContext();

export const Api1Provider = ({ children }) => {
  const [dataProducts, isLoadingsDataProducts, isErrorDataProducts] = useRequestData(`${URLAPI}products`, []);
  const [dataRecipes, isLoadingDataRecipes, isErrorDataRecipes] = useRequestData(`${URLAPI}recipes`, []);

  const [products, setProducts] = useState(dataProducts);
  const [recipes, setRecipes] = useState(dataRecipes);
  const [cart, setCart] = useState(getCartFromLocalStorage());

  const addCart = (newItem4Cart) => {
    const index = cart.findIndex((cartItem) => cartItem.id === newItem4Cart.id);

    if (index === -1) {
      const copyCart = [...cart, { ...newItem4Cart, quantity: 1 }];
      setCartAndLocalStorage(copyCart);
      showSuccessAlert(newItem4Cart.item); // Exibe a mensagem ao adicionar ao carrinho
    } else {
      const copyCart = [...cart];
      copyCart[index] = { ...copyCart[index], quantity: copyCart[index].quantity + 1 };
      setCartAndLocalStorage(copyCart);
      showSuccessAlert(newItem4Cart.item); // Exibe a mensagem ao adicionar ao carrinho
    }
  };
  const addPlus1 = (newItem4Cart) => {
    const index = cart.findIndex((cartItem) => cartItem.id === newItem4Cart.id);

    if (index === -1) {
      const copyCart = [...cart, { ...newItem4Cart, quantity: 1 }];
      setCartAndLocalStorage(copyCart);

    } else {
      const copyCart = [...cart];
      copyCart[index] = { ...copyCart[index], quantity: copyCart[index].quantity + 1 };
      setCartAndLocalStorage(copyCart);
    }
  };
  // Restante do código...

  function showSuccessAlert(productName) {
    Swal.fire({
      icon: 'success',
      title: 'Produto Adicionado ao Carrinho',
      text: `${productName} foi adicionado ao carrinho.`,
    });
  }
  const removeItem = (itemId) => {
    Swal.fire({
      title: 'REMOVER ITEM?',
      text: 'Isto ira REMOVER ESTE ITEM do seu carrinho, deseja realmente fazer isso?.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'REMOVER ITEM',
      cancelButtonText: 'CANCELAR e MANTER ITEM !',
    }).then((result) => {
      if (result.isConfirmed) {
        const filteredCart = cart.filter((item) => item.id !== itemId);
        setCartAndLocalStorage(filteredCart);
        Swal.fire('ITEM DELETADO!', 'Seu item foi deletado com sucesso', 'success');
        setCart(filteredCart)
      }
    });
  };

  const emptyCart = () => {
    Swal.fire({
      title: 'ESVAZIAR CARRINHO?',
      text: 'Isto ira ESVAZIAR seu carrinho, esta seguros disso?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SIM, ESVAZIAR CARRINHO',
      cancelButtonText: 'CANCELAR e manter MEU CARRINHO',
    }).then((result) => {
      if (result.isConfirmed) {
        setCartAndLocalStorage([]);
        Swal.fire('CARRINHO VAZIO!', 'Seu carrinho foi ESVAZIADO COM SUCESSO!', 'success');
      }
    });
  };

  const deleteOneUnit = (itemId) => {
    const index = cart.findIndex((cartItem) => cartItem.id === itemId);

    if (index !== -1) {
      const copyCart = [...cart];
      copyCart[index] = { ...copyCart[index], quantity: copyCart[index].quantity - 1 };

      if (copyCart[index].quantity === 0) {
        Swal.fire({
          title: 'DELETAR ITEM?',
          text: 'isso ira DELETAR o item do carrinho, voce realmente deseja fazer isso?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'sim, quero DELETAR!',
        cancelButtonText: 'Cancelar!'
        }).then((result) => {
          if (result.isConfirmed) {
            copyCart.splice(index, 1);
            setCartAndLocalStorage(copyCart);
            Swal.fire('Removed!', 'Item removed from the cart.', 'success');
          }
        });
      } else {
        setCartAndLocalStorage(copyCart);
      }
    }
  };

  useEffect(() => {
    setProducts(dataProducts);
  }, [dataProducts]);

  useEffect(() => {
    setRecipes(dataRecipes);
  }, [dataRecipes]);

  function setCartAndLocalStorage(newCart) {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  function getCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  }
  const handleOnChangeInput = (event) => {
    const { value } = event.target;
    setProducts(value);

    if (!value || value === '') {
      setProducts(dataProducts);
    } else {
      const inputFilter = dataProducts.filter((recipe) =>
        recipe.item.toUpperCase().includes(value.toUpperCase())
      );
      setProducts(inputFilter);
    }
  };
  const getCartTotal = () => {
    // Calcula o total do carrinho somando a quantidade multiplicada pelo preço de cada item
    const total = cart.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);

    return total.toFixed(2); // Arredonda para duas casas decimais
  };
  return (
    <Api1Context.Provider value={{
       products, 
       setProducts, 
       recipes, 
       setRecipes, 
       cart, 
       setCart, 
       addCart, 
       removeItem, 
       emptyCart, 
       deleteOneUnit,
       addPlus1,
       dataProducts,
       isLoadingsDataProducts,
       isErrorDataProducts,
       getCartTotal,
       handleOnChangeInput }}>
      {children}
    </Api1Context.Provider>
  );
};

import { ContainerFormProducts } from "./styled.FormProducts"
import { useForm } from "../../../hooks/useForm";
import { URLAPI } from "../../../common/constants/URLAPI";
import axios from "axios";
export default function FormProducts() {
  const { formState, handleInputChange, handleResetForm } = useForm({
    item: '',
    description: '',
    imageUrl: '',
    price: 0,
    category: ''
  });
  const {
    item,
    description,
    imageUrl,
    price,
    category
  } = formState;

  const handleCreateProduct = async (event) => {
    event.preventDefault();

    const body = { ...formState };

    try {
      const response = await axios.post(`${URLAPI}products`, body, {
        headers: {
          Authorization: 'botechia-erika',
        },
      });

      alert('Produto cadsastrado com sucsessso');
      console.log(response.data);
      // Limpar o formulário após o envio bem-sucedido
      handleResetForm();
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <ContainerFormProducts>
      <h2>Criar Novo Produto</h2>

      <form>
        <fieldset>
          <legend>Dados do Novo Produto</legend>
          <input 
          type="text" 
          name="item" 
          id="item" 
          value={item}
          onChange={handleInputChange}
          placeholder={"Nome do Produto"}
          required
          />
          <input 
          type="text" 
          name="description" 
          id="description" 
          value={description}
          onChange={handleInputChange}
          placeholder={"Unidade para venda"}
          required
          />
          <input 
          type="text" 
          name="imageUrl" 
          id="imageUrl" 
          value={imageUrl}
          onChange={handleInputChange}
          placeholder={"link url imagem"}
          pattern="^(https?:\/\/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}([-a-zA-Z0-9@:%_\+.~#?&//=]*)?)$"
          required
          />
           <input 
          type="number" 
          name="price" 
          id="price" 
          min={0}
          value={price}
          step={0.1}
          onChange={handleInputChange}
          placeholder={"preco base"}
          required
          />

            <select
              name="category"
              id="category"
              value={category}
              onChange={handleInputChange}
              required
            >
              <option value="">--TODAS as CATEGORIAS--</option>
              <option value="horti-fruti">Horti-Fruti</option>
              <option value="laticinios">Laticinios</option>
              <option value="armazem">Armazem</option>
              <option value="limpeza">Limpeza</option>
              <option value="papelaria">Papelaria</option>
              <option value="marmitex">Marmitex</option>
            </select>
            <button onClick={handleCreateProduct}>Criar Novo Produto</button>
        </fieldset>
      </form>
   </ContainerFormProducts>
  )
}

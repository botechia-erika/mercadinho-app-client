import { useContext, useState } from 'react';
import { HomeContainer } from './styled.ProductsPage';
import CardProducts from './../../components/Cards/CardProducts/CardProducts';
import SectionRecipes from './../../components/Sections/SectionRecipes/SectionRecipes';
import { Loader } from '../../components/Loader/Loader';
import { ErrorDisplay } from '../../components/ErrorDisplay/ErrorDisplay';
import { Api1Context } from '../../common/context/api1-context';


export default function ProductsPage() {
      const [maxPrice, setMaxPrice] = useState(300);
      const [minPrice, setMinPrice] = useState(1);
    
      const [searchName, setSearchName] = useState("");
      const [categorySelect, setCategorySelect] = useState("");
      const {
        products,
        isLoadingsDataProducts,
        isErrorDataProducts,
        
      } = useContext(Api1Context);
    
      const [itemsPerPage, setItemsPerPage] = useState(6);
      const [currentPage, setCurrentPage] = useState(0);
    
      // calcula numero total dse items dividido por items por paagina e define o numero total de paginas do paggination
      const pages = Math.ceil(products.length/itemsPerPage)
    
    // FATIAR array de 
    
    //paginaa atual * items per page da index de  primiero item
        const startIndex = currentPage * itemsPerPage
     // calcula ultimo item dsass paaginasss  
        const endIndex = startIndex + itemsPerPage
    
        const currentItems = products.slice(startIndex, endIndex)
    
  return (
    <HomeContainer>
      <aside>
          <div className="filtersBox">
            <input
              type="text"
              id={'inputName'}
              name={'inputName'}
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <input
              type="number"
              id={'inputMinPrice'}
              name={'inputMinPrice'}
              min={1}
              max={maxPrice}
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              type="number"
              id={'inputMaxPrice'}
              name={'inputMaxPrice'}
              min={minPrice}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
            <label htmlFor="categorySelect">Categoria de Produto</label>
            <select
              name="categorySelect"
              id="categorySelect"
              value={categorySelect}
              onChange={(e) => setCategorySelect(e.target.value)}
            >
              <option value="">--TODAS as CATEGORIAS--</option>
              <option value="horti-fruti">Horti-Fruti</option>
              <option value="laticinios">Laticinios</option>
              <option value="armazem">Armazem</option>
              <option value="limpeza">Limpeza</option>
              <option value="papelaria">Papelaria</option>
            </select>
<select value={itemsPerPage} onChange={(e) => { setItemsPerPage(Number(e.target.value)) }}>
    <option value={6}  selected="true">--ITEMS POR PAGINA--</option>
    <option value={6}>6 items</option>
    <option value={9}>9 items</option>
    <option value={12}>12 items</option>
</select>

        </div>
        <p>Paginas</p>
          {Array.from(Array(pages), (item, index)=>{
return  (<button value={index}
onClick={(e)=>{setCurrentPage(Number(e.target.value))}} key={index}>{index+1}</button>
)})}
        </aside>

        <SectionRecipes className="container">
          {isLoadingsDataProducts && <Loader />}
          {isErrorDataProducts && <ErrorDisplay message="Erro ao carregar receitas" />}
          {!isErrorDataProducts && products &&
            currentItems
              .filter((product) => {
                if (minPrice && product.price > minPrice) {
                  return product;
                } else if (minPrice === "") {
                  return true; // Return true to include all products when minPrice is not set
                }
              })
              .filter((product) => {
                if (maxPrice && product.price < maxPrice) {
                  return product;
                } else if (maxPrice === "") {
                  return true; // Return true to include all products when maxPrice is not set
                }
              })
              .filter((product) => {
                if (searchName && product.item.toUpperCase().includes(searchName.toUpperCase())) {
                  return product;
                } else if (searchName === "") {
                  return true; // Return true to include all products when searchName is not set
                }
              })
              .filter((product) => {
                if (categorySelect && product.category.toUpperCase().includes(categorySelect.toUpperCase())) {
                  return product;
                } else if (categorySelect === "") {
                  return true; // Return true to include all products when categorySelect is not set
                }
              })
              .map((item) => <CardProducts key={item.id} product={item} />)
          }

          {!isErrorDataProducts && products &&
            !products[0] &&
            <h2>Nenhum produto encontrado</h2>}
        </SectionRecipes>
    </HomeContainer>
  )
}

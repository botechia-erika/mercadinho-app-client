
import { useContext } from 'react';
import { Api1Context } from '../../common/context/api1-context';
import Banner from '../../components/Banner/Banner';

export function HomePage() {
     const {
        products,
        isLoadingsDataProducts,
        isErrorDataProducts,
        
      } = useContext(Api1Context);
    
  return (
    <>
    {products.length > 0 ? console.log(products): console.log("fetching in process")}
      <Banner />
    </>
  );
}

import { useContext } from 'react';
import { Api1Provider} from './common/context/api1-context'
import {Api2Provider} from './common/context/api2-context'

import { Footer } from './components/Footer/Footer';
import Router from './router/Router';
function App() {


  return (
    <div className='container'>
      <Api1Provider>
      <Api2Provider>

      <Router/>
      <Footer />

      </Api2Provider>
      </Api1Provider>
    </div>
  );
}

export default App;

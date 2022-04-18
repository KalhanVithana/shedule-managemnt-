
import 'antd/dist/antd.css';
import "./assets/SCSS/index.scss";
import store,{persistor} from './redux/store';
import AppRoutes from './routes';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
function App() {
  return (
    <>
     <Provider store = {store}>
     <PersistGate persistor={persistor}>
     <AppRoutes/>
      </PersistGate>
  
     </Provider>
     
   
    </>
  );
}

export default App;

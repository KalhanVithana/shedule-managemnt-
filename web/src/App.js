
import 'antd/dist/antd.css';
import "./assets/SCSS/index.scss";
import store from './redux/store';
import AppRoutes from './routes';
import {Provider} from 'react-redux'
function App() {
  return (
    <>
     <Provider store = {store}>
     <AppRoutes/>
     </Provider>
   
    </>
  );
}

export default App;

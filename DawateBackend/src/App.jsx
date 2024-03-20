import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import {Provider} from 'react-redux'
import courseNameStore from './store/redux-store';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <Provider store={courseNameStore}>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </Provider>
    </>
  )
}

export default App

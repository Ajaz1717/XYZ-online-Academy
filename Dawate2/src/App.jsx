import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import courseNameStore from "./store/redux-store.js";

function App() {
  return (
    <>
      <Provider store={courseNameStore}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </Provider>
    </>
  );
}

export default App;

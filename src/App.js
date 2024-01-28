import { Outlet } from "react-router-dom";
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import FooterComponent from "./components/footer/FooterComponent";

function App() {
  return (
    <div className="App pt-10">
      <HeaderComponent></HeaderComponent>
      <Outlet />
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;

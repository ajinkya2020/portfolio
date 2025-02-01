import { Outlet } from "react-router-dom";
import './App.scss';
import FooterComponent from "./components/footer/FooterComponent";
import HeaderComponent from "./components/header/HeaderComponent";

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

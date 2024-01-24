import { Outlet } from "react-router-dom";
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';

function App() {
  return (
    <div className="App px-16 py-10">
      <HeaderComponent></HeaderComponent>
      <Outlet />
    </div>
  );
}

export default App;

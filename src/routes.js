import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./Componentes/Menu";


function AppRoutes() {
  return (
    <BrowserRouter> 
      <Menu/>

      <Routes>
         <Route path="/" element={<Inicio />}/>
         <Route path="/sobremim" element={<SobreMim/>} />
         <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

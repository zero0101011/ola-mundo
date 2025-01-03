import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./Componentes/Menu";
import RodaPe from "Componentes/RodaPe";
import PaginaPadrao from "Componentes/PaginaPadrao";


function AppRoutes() {
  return (
    <BrowserRouter> 
      <Menu/>

      <Routes>
        <Route path="/" element={<PaginaPadrao/>} >

         <Route index element={<Inicio />}/>
         <Route path="sobremim" element={<SobreMim/>} />

        </Route>


         <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>

      <RodaPe/>
    </BrowserRouter>
  );
}

export default AppRoutes;

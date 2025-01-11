import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./Componentes/Menu";
import RodaPe from "Componentes/RodaPe";
import PaginaPadrao from "Componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "Componentes/NaoEncontrada";
import ScrollToTop from "Componentes/ScrollTop";



function AppRoutes() {
  return (
    <BrowserRouter> 
    <ScrollToTop/>
      <Menu/>

      <Routes>
        <Route path="/" element={<PaginaPadrao/>} >

         <Route index element={<Inicio />}/>
         <Route path="sobremim" element={<SobreMim/>} />
        

        </Route>

        <Route path="post/:id" element={<Post/>}/>
         <Route path="*" element={<NaoEncontrada/>} />
      </Routes>

      <RodaPe/>
    </BrowserRouter>
  );
}

export default AppRoutes;

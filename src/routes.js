import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/Sobre mim";
import Menu from "./Componente/Menu";
import Rodape from "Componente/Rodape";
import PaginaPadrao from "Paginas/PaginaPadrao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
      
        <Route path="*" element={<div>pagina não encontrada.</div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;

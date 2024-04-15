import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cursos from "./pages/Cursos/Cursos";
import Sobrenos from "./pages/SobreNos/Sobrenos";
import Contato from "./pages/Contato/Contato";
function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/cursos" element={<Cursos/>}></Route>
                <Route path="/sobrenos" element={<Sobrenos/>}></Route>
                <Route path="/contato" element={<Contato/>}></Route>
            </Routes>
        </BrowserRouter>
   )
}
export default AppRoutes 
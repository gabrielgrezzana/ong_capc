import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Activit from "./pages/atividades/activitis";
import Depoimentos from "./pages/depoimentos/depoimentos";
import Footer from "./pages/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Adicione o Header se necessário */}

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atividades" element={<Activit />} />
            <Route path="/depoimentos" element={<Depoimentos />} />
            {/* Adicione outras rotas aqui */}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

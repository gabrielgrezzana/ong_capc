import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Activit from "./pages/atividades/activitis";
import Depoimentos from "./pages/depoimentos/depoimentos";
import Footer from "./pages/footer/footer";
import History from "./pages/history/history";
import Mission from "./pages/mission/mission";
import Moments from "./pages/moments/moments";
import WhoIAm from "./pages/who/who";
import Supplier from "./pages/supplier/supplier";
import Cancer from "./pages/cancer/cancer";


function App() {
    return (
    <BrowserRouter>
      <div className="app-container">                
        <main className="main-content">
          <section id="home">
            <Home />
          </section>
          <section id="atividades">
            <Activit />
          </section>
          <section id="depoimentos">
            <Depoimentos />
          </section>
          <section id="historia">
            <History />
          </section>
          <section id="missao">
            <Mission />
          </section>
          <section id="momentos">
            <Moments />
          </section>
          <section id="quem-somos">
            <WhoIAm />
          </section>
          <section id="fornecedores">
            <Supplier />
          </section>
          <section id="cancer">
            <Cancer />
          </section>
          
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

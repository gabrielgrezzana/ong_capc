import Home from "./pages/home/home";
import Activit from "./pages/atividades/activitis";
import Depoimentos from "./pages/depoimentos/depoimentos";
import Moments from "./pages/moments/moments";
import History from "./pages/history/history";
import Mission from "./pages/mission/mission";
import WhoIAm from "./pages/who/who";
import Supplier from "./pages/supplier/supplier";
import Footer from "./pages/footer/footer";

import "./main.css";

function App() {
  return (
    <div style={{ backgroundColor: "#323232", width: "100%", height: "100%" }}>
      <Home />
      <Activit />
      <Depoimentos />
      <Moments />
      <History />
      <Mission />
      <WhoIAm />
      <Supplier />
      <Footer />
    </div>
  );
}

export default App;

import Home from "./pages/home/home";
import Activit from "./pages/atividades/activitis";
import Depoimentos from "./pages/depoimentos/depoimentos";
import Moments from "./pages/moments/moments";
import "./main.css";

function App() {
  return (
    <div style={{ backgroundColor: "#323232", width: "100%", height: "100%" }}>
      <Home />
      <Activit />
      <Depoimentos />
      <Moments />
    </div>
  );
}

export default App;

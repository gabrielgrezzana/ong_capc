import { useState } from "react";
import theme from "../../theme/theme";
import Photo_Moments from "../../components/cards/card_just_photo/photo_moments";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface IFotosPorAno {
  [ano: number]: { id: number; image: string; alt: string; }[];
}
// Dados de exemplo - estruturados por ano
const fotosPorAno: IFotosPorAno = {
  2014: [
    { id: 1, image: "https://i.imgur.com/fqBYjLh.jpg", alt: ""},
    { id: 2, image: "https://i.imgur.com/VDyngxT.jpg", alt: ""},
    { id: 3, image: "https://i.imgur.com/YfJ6lad.jpg", alt: ""},
    { id: 4, image: "https://i.imgur.com/BJeLjsM.jpg", alt: ""},
    { id: 5, image: "https://i.imgur.com/ojYXoal.jpg", alt: ""},
    { id: 6, image: "https://i.imgur.com/mJmJtyE.jpg", alt: ""},
    { id: 7, image: "https://i.imgur.com/5ilvsTH.jpg", alt: ""},
    { id: 8, image: "https://i.imgur.com/Vzw392K.jpg", alt: ""},
    { id: 9, image: "https://i.imgur.com/3z2afze.jpg", alt: ""},
  ],
  2015: [
    { id: 10, image: "https://i.imgur.com/LOaRgzM.jpg", alt: ""},
    { id: 11, image: "https://i.imgur.com/QUYVWGG.jpg", alt: ""},
    { id: 12, image: "https://i.imgur.com/0YnMRzU.jpg", alt: ""},
    { id: 13, image: "https://i.imgur.com/RVfzTNK.jpg", alt: ""},
    { id: 14, image: "https://i.imgur.com/bYjqruV.jpg", alt: ""},
    { id: 15, image: "https://i.imgur.com/gQfKTIq.jpg", alt: ""},
    { id: 16, image: "https://i.imgur.com/w3wbAxG.jpg", alt: ""},
    { id: 17, image: "https://i.imgur.com/BbjoHt5.jpg", alt: ""},
  ],
  2016: [
    { id: 18, image: "https://i.imgur.com/WMvSpxe.jpg", alt: ""},
    { id: 19, image: "https://i.imgur.com/Z0CX8gp.jpg", alt: ""},
    { id: 20, image: "https://i.imgur.com/J0CRyyE.jpg", alt: ""},
    { id: 21, image: "https://i.imgur.com/9IDEzq6.jpg", alt: ""},
    { id: 22, image: "https://i.imgur.com/DeBMybe.jpg", alt: ""},
    { id: 23, image: "https://i.imgur.com/EAwNACW.jpg", alt: ""},
    { id: 24, image: "https://i.imgur.com/8SYyjT7.jpg", alt: ""},
    { id: 25, image: "https://i.imgur.com/bd9jvxg.jpg", alt: ""},
    { id: 26, image: "https://i.imgur.com/3PFQjW5.jpg", alt: ""},
  ],
  2017: [
    { id: 27, image: "https://i.imgur.com/jDwLUJ4.jpg", alt: ""},
    { id: 28, image: "https://i.imgur.com/3nqhGc1.jpg", alt: ""},
    { id: 29, image: "https://i.imgur.com/ehnTCBY.jpg", alt: ""},
    { id: 30, image: "https://i.imgur.com/7NvFloV.jpg", alt: ""},
    { id: 31, image: "https://i.imgur.com/bP3EY3O.jpg", alt: ""},
    { id: 32, image: "https://i.imgur.com/oBZX60P.jpg", alt: ""},
    { id: 33, image: "https://i.imgur.com/l59PiHX.jpg", alt: ""},
    { id: 34, image: "https://i.imgur.com/ohGFHcQ.jpg", alt: ""},
  ],
  2018: [
    { id: 35, image: "https://i.imgur.com/VozM4V3.jpg", alt: ""},
    { id: 36, image: "https://i.imgur.com/y8vtocD.jpg", alt: ""},
    { id: 37, image: "https://i.imgur.com/4GuhwX2.jpg", alt: ""},
    { id: 38, image: "https://i.imgur.com/F2HO6mz.jpg", alt: ""},
    { id: 39, image: "https://i.imgur.com/OSkPR8m.jpg", alt: ""},
    { id: 40, image: "https://i.imgur.com/jnssdKH.jpg", alt: ""},
    { id: 41, image: "https://i.imgur.com/yuk2Mtk.jpg", alt: ""},
    { id: 42, image: "https://i.imgur.com/wkM3lcW.jpg", alt: ""},
    { id: 43, image: "https://i.imgur.com/XAJhgGW.jpg", alt: ""},
  ],
  2019: [
    { id: 44, image: "https://i.imgur.com/fw8gT2S.jpg", alt: ""},
    { id: 45, image: "https://i.imgur.com/xcmBxTH.jpg", alt: ""},
    { id: 46, image: "https://i.imgur.com/nIrYsCu.jpg", alt: ""},
    { id: 47, image: "https://i.imgur.com/MDkqwCi.jpg", alt: ""},
    { id: 48, image: "https://i.imgur.com/V1fgIwm.jpg", alt: ""},
    { id: 49, image: "https://i.imgur.com/ywtHYas.jpg", alt: ""},
    { id: 50, image: "https://i.imgur.com/HRp0SlQ.jpg", alt: ""},
    { id: 51, image: "https://i.imgur.com/ced3DEu.jpg", alt: ""},
    { id: 52, image: "https://i.imgur.com/z4GpgRh.jpg", alt: ""},
  ],
};

const anos = [2014, 2015, 2016, 2017, 2018, 2019];



const Moments = () => {
  const [anoSelecionado, setAnoSelecionado] = useState<number>(2019); // O ano mais recente como padrão
  const [currentIndex, setCurrentIndex] = useState(0);
  const photosPerPage = 3;

  // Obtém as fotos do ano selecionado
  const fotosMomentos = fotosPorAno[anoSelecionado];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + photosPerPage >= fotosMomentos.length
        ? 0
        : prevIndex + photosPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - photosPerPage < 0
        ? fotosMomentos.length -
          (fotosMomentos.length % photosPerPage || photosPerPage)
        : prevIndex - photosPerPage
    );
  };

  const handleAnoChange = (ano: number) => {
    setAnoSelecionado(ano);
    setCurrentIndex(0); // Resetar para a primeira página ao mudar o ano
  };

  const visiblePhotos = fotosMomentos.slice(
    currentIndex,
    currentIndex + photosPerPage
  );

  return (
    <section
      style={{
        width: "100%",
        minHeight: "80vh",
        backgroundColor: theme.colors.background,
        padding: "60px 20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Título estilizado com seletor de ano */}
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          marginBottom: "40px",
          textAlign: "center",
          position: "relative", // Para posicionar o seletor absolutamente em relação a este container
        }}
      >
        {/* Seletor de Ano */}
        <div
          style={{
            position: "absolute",
            right: "20px",
            top: "10px",
            zIndex: 20,
          }}
        >
          <select
            value={anoSelecionado}
            onChange={(e) => handleAnoChange(Number(e.target.value))}
            style={{
              padding: "8px 15px",
              borderRadius: "8px",
              border: "2px solid #F77C2C",
              backgroundColor: "white",
              color: "#333",
              fontWeight: "bold",
              cursor: "pointer",
              outline: "none",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              appearance: "none", // Remove o estilo padrão de select em alguns navegadores
              backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\"%23F77C2C\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 10px center",
              paddingRight: "30px", // Espaço para o ícone
            }}
          >
            {anos.map((ano) => (
              <option key={ano} value={ano}>
                {ano}
              </option>
            ))}
          </select>
        </div>

        <h1
          style={{
            color: "#F77C2C",
            fontSize: "2.5rem",
            fontWeight: 700,
            margin: 0,
            position: "relative",
            display: "inline-block",
          }}
        >
          Momentos CAPC
          <span
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              backgroundColor: "#F77C2C",
              borderRadius: "2px",
            }}
          ></span>
        </h1>
        <p
          style={{
            color: "#666",
            fontSize: "1.1rem",
            marginTop: "20px",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.6,
          }}
        >
          Registros especiais dos nossos melhores momentos e atividades de {anoSelecionado}
        </p>
      </div>

      {/* Carrossel - Container principal */}
      <div
        style={{
          width: "95%",          
          position: "relative",
          padding: "0 60px",
        }}
      >
        {/* Botão anterior */}
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(247, 124, 44, 0.9)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10,
            transition: "all 0.3s ease",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          <FiChevronLeft size={28} />
        </button>

        {/* Fotos visíveis */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            overflow: "hidden",
            padding: "20px 0",
          }}
        >
          {visiblePhotos.map((foto) => (
            <div
              key={foto.id}
              style={{
                flex: "0 0 30%", // Cada foto ocupa 30% do container
                maxWidth: "400px",
                height: "300px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease",
              }}
            >
              <Photo_Moments
                image={foto.image}
                altText={foto.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>

        {/* Botão próximo */}
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(247, 124, 44, 0.9)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10,
            transition: "all 0.3s ease",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          <FiChevronRight size={28} />
        </button>
      </div>

      {/* Indicadores */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          gap: "12px",
        }}
      >
        {Array.from({
          length: Math.ceil(fotosMomentos.length / photosPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * photosPerPage)}
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              border: "none",
              background:
                currentIndex === index * photosPerPage ? "#F77C2C" : "#ccc",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Moments;
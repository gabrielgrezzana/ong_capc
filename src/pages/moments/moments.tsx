import { useState } from "react";
import theme from "../../theme/theme";
import Photo_Moments from "../../components/cards/card_just_photo/photo_moments";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Dados de exemplo - estruturados por ano
const fotosPorAno = {
  2014: [
    { id: 1, image: "https://as1.ftcdn.net/jpg/12/94/25/98/1000_F_1294259821_jJBsvwbFPzM7FZWKX1sBjyPlDXyRXneI.jpg", alt: "Atividade com crianças 2014" },
    { id: 2, image: "url_foto2_2014", alt: "Workshop educacional 2014" },
    { id: 3, image: "url_foto3_2014", alt: "Evento de inclusão 2014" },
    { id: 1, image: "url_foto1_2014", alt: "Atividade com crianças 2014" },
    { id: 2, image: "url_foto2_2014", alt: "Workshop educacional 2014" },
    { id: 3, image: "url_foto3_2014", alt: "Evento de inclusão 2014" },
    { id: 1, image: "url_foto1_2014", alt: "Atividade com crianças 2014" },
    { id: 2, image: "url_foto2_2014", alt: "Workshop educacional 2014" },
    { id: 3, image: "url_foto3_2014", alt: "Evento de inclusão 2014" },
  ],
  2015: [
    { id: 4, image: "url_foto1_2015", alt: "Sessão de terapia 2015" },
    { id: 5, image: "url_foto2_2015", alt: "Atividade ao ar livre 2015" },
    { id: 6, image: "url_foto3_2015", alt: "Palestra para pais 2015" },
  ],
  2016: [
    { id: 7, image: "url_foto1_2016", alt: "Atividade em grupo 2016" },
    { id: 8, image: "url_foto2_2016", alt: "Celebração de resultados 2016" },
    { id: 9, image: "url_foto3_2016", alt: "Reunião da equipe 2016" },
  ],
  2017: [
    { id: 10, image: "url_foto1_2017", alt: "Festa anual 2017" },
    { id: 11, image: "url_foto2_2017", alt: "Treinamento de voluntários 2017" },
    { id: 12, image: "url_foto3_2017", alt: "Passeio educativo 2017" },
  ],
  2018: [
    { id: 13, image: "url_foto1_2018", alt: "Oficina criativa 2018" },
    { id: 14, image: "url_foto2_2018", alt: "Evento de arrecadação 2018" },
    { id: 15, image: "url_foto3_2018", alt: "Encontro de famílias 2018" },
  ],
  2019: [
    { id: 16, image: "url_foto1_2019", alt: "Atendimento especial 2019" },
    { id: 17, image: "url_foto2_2019", alt: "Formatura do projeto 2019" },
    { id: 18, image: "url_foto3_2019", alt: "Confraternização 2019" },
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

  const handleAnoChange = (ano) => {
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
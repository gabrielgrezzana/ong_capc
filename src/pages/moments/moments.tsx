import { useState } from "react";
import theme from "../../theme/theme";
import Photo_Moments from "../../components/cards/card_just_photo/photo_moments";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Dados de exemplo - substitua pelas suas fotos reais
const fotosMomentos = [
  { id: 1, image: "url_foto1", alt: "Atividade com crianças" },
  { id: 2, image: "url_foto2", alt: "Workshop educacional" },
  { id: 3, image: "url_foto3", alt: "Evento de inclusão" },
  { id: 4, image: "url_foto4", alt: "Sessão de terapia" },
  { id: 5, image: "url_foto5", alt: "Atividade ao ar livre" },
  { id: 6, image: "url_foto6", alt: "Palestra para pais" },
  { id: 7, image: "url_foto7", alt: "Atividade em grupo" },
  { id: 8, image: "url_foto8", alt: "Celebração de resultados" },
];

const Moments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photosPerPage = 3;

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
      {/* Título estilizado */}
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
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
          Registros especiais dos nossos melhores momentos e atividades
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

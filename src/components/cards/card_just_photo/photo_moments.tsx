import { useState } from "react";

const Photo_Moments = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  image,
  altText = "Momento CAPC",
  style = {},
  onClick = () => {},
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        ...style,
      }}
    >
      {/* Imagem principal */}
      <img
        src={image}
        alt={altText}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.5s ease",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
        }}
      />

      {/* Overlay no hover */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isHovered ? "rgba(247, 124, 44, 0.2)" : "transparent",
          transition: "background 0.3s ease",
          display: "flex",
          alignItems: "flex-end",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        {/* Texto descritivo (aparece no hover) */}
        <span
          style={{
            color: "white",
            fontSize: "16px",
            fontWeight: 600,
            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease",
            transform: isHovered ? "translateY(0)" : "translateY(10px)",
          }}
        >
          {altText}
        </span>
      </div>

      {/* Ícone de zoom (opcional) */}
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "24px",
            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
            opacity: 0.8,
          }}
        >
          🔍
        </div>
      )}
    </div>
  );
};

export default Photo_Moments;

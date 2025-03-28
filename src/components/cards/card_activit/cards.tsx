import images from "../../../assets";
import Text from "../../../atoms/text/text";

const Card = ({
  image = images.example,
  title = "Título do Card",
  description = "Descrição breve do card. Lorem ipsum dolor sit amet.",
  backgroundColor = "#F77C2C",
  textColor = "#FFFFFF",
}) => {
  return (
    <div
      style={{
        width: "280px",
        minHeight: "350px",
        backgroundColor: backgroundColor,
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        margin: "15px",
        ":hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        },
      }}
    >
      <div
        style={{
          width: "100%",
          height: "180px",
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            ":hover": {
              transform: "scale(1.05)",
            },
          }}
        />
      </div>

      <div
        style={{
          padding: "20px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: textColor,
        }}
      >
        <Text
          label={title}
          variant="labelCard"
          style={{
            fontSize: "18px",
            fontWeight: "600",
            marginBottom: "12px",
            lineHeight: "1.3",
          }}
        />
        <Text
          label={description}
          variant="labelCard"
          style={{
            fontSize: "14px",
            lineHeight: "1.5",
            opacity: 0.9,
          }}
        />
      </div>
    </div>
  );
};

export default Card;

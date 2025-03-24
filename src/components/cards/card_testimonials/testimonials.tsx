import images from "../../../assets";
import theme from "../../../theme/theme";
import Text from "../../../atoms/text/text";

interface Props {
  textToShow: string;
}

const Testimonials = ({ textToShow }: Props) => {
  return (
    <div
      style={{
        width: "25%",
        height: "100%",
        backgroundColor: theme.colors.background,
        borderWidth: 2,
        borderColor: "#fff",
        borderStyle: "solid",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        gap: "12px",
        overflow: "hidden",
      }}
    >
      <img
        src={images.LOGO_LARANJA}
        alt="foto_depoimento"
        style={{
          width: "100%",
          height: "50%",
          objectFit: "contain",          
        }}
      />
      <div
        style={{
          width: "100%",
          height: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "8px",
          overflow: "hidden",
          wordBreak: "break-word",
          whiteSpace: "normal",
          maxHeight: "100%",
          flex: 1,
        }}
      >
        <Text label={textToShow} variant="labelCard" />
      </div>
    </div>
  );
};

export default Testimonials;

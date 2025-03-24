import theme from "../../theme/theme";
import Photo_Moments from "../../components/cards/card_just_photo/photo_moments";

const Moments = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "80vh",
        backgroundColor: theme.colors.background,
      }}
    >
      <h1 style={{ color: "#F77C2C", marginLeft: 40 }}>Momentos CAPC</h1>

      <div
        style={{
          width: "100%",
          height: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 25,
        }}
      >
        <Photo_Moments />
        <Photo_Moments />
        <Photo_Moments />
        <Photo_Moments />
        <Photo_Moments />
      </div>
    </div>
  );
};

export default Moments;

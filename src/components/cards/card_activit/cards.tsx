import images from "../../../assets";
import Text from "../../../atoms/text/text";

const Card = () => {
  return (
    <div
      style={{ width: "250px", height: "300px", backgroundColor: "#F77C2C" }}
    >
      <img src={images.example} style={{ width: "100%", height: "50%" }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "50%",
          textAlign: "center",
        }}
      >
        <Text
          label="Exemplo de atividade, realizada pelo capc, Lorem ip sun teste, lorem
        ipsun teste, lorem ipsun , teste , lorem ipsun teste"
          variant="labelCard"
        />
      </div>
    </div>
  );
};

export default Card;

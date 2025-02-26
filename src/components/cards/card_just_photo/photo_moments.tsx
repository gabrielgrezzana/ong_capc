import images from "../../../assets";

const Photo_Moments = () => {
  return (
    <button
      onClick={() => alert("Em desenvolvimento")}
      style={{ width: "15%", height: "35%" }}
    >
      <img src={images.example} style={{ width: "100%", height: "100%" }} />
    </button>
  );
};

export default Photo_Moments;

import styled from "styled-components";

interface TextProps {
  label?: string;
  variant: "header" | "body" | "labelCard" | "history" | "iknow";
}

const variantStyles = {
  header: {
    fontSize: "26px",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "0px",
    as: "h1",
  },
  body: {
    fontSize: "18px",
    fontWeight: "normal",
    color: "#333",
    marginBottom: "0px",
    as: "p",
  },
  labelCard: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    marginBottom: "0px",
    as: "span",
  },
  history: {
    fontWeight: "600",
    marginBottom: "0px",
    as: "p",
    alignText: "center",
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#555",
    textAlign: "justify",
  },
  iknow: {
    textAlign: "center",
    maxWidth: "60%",
    marginBottom: 40,
    fontSize: "24px",
    fontWeight: "600",
    color: "#fff",
    as: "h4",
  },
};

const StyledText = styled.p<{
  variant: "header" | "body" | "labelCard" | "history" | "iknow";
}>`
  font-size: ${({ variant }) => variantStyles[variant].fontSize};
  font-weight: ${({ variant }) => variantStyles[variant].fontWeight};
  color: ${({ variant }) => variantStyles[variant].color};
  margin-bottom: ${({ variant }) => variantStyles[variant].marginBottom};
`;

const Text = ({ label, variant }: TextProps) => {
  return (
    <StyledText as={variantStyles[variant].as} variant={variant}>
      {label}
    </StyledText>
  );
};

export default Text;

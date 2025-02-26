import styled from "styled-components";

interface TextProps {
  label?: string;
  variant: "header" | "body" | "labelCard";
}

const variantStyles = {
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "0px",
    as: "h1",
  },
  body: {
    fontSize: "16px",
    fontWeight: "normal",
    color: "#333",
    marginBottom: "0px",
    as: "p",
  },
  labelCard: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#fff",
    marginBottom: "0px",
    as: "span",
  },
};

const StyledText = styled.p<{ variant: "header" | "body" | "labelCard" }>`
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

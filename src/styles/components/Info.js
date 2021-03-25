import styled from "@emotion/styled";

const Info = styled.p(props => {
  let type = props.type || "val";
  const defaultStyle = {
    fontSize: "1.4rem",
    textTransform: "capitalize"
  };
  if (type === "key")
    return {
      ...defaultStyle,
      ontFamily: "var(--titleFont)",
      fontWeight: "bold"
    };
  return {
    ...defaultStyle
  };
});
export default Info;

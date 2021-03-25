import styled from "@emotion/styled";
const Button = styled.button(props => {
  let type = props.type || "primary";
  let style = {
    bgColor: `var(--${type})`,
    hoverColor: props.buttonAlt ? "#f7f7f7" : `var(--${type}_hover)`
  };
  switch (type) {
    case "danger":
    case "primary":
    default:
      style = {
        ...style,
        fontColor: "white"
      };
      break;
  }
  return {
    padding: ".8rem",
    borderRadius: "1rem",
    border: props.buttonAlt ? `solid 1px ${style.bgColor}` : "none",
    transition: "background 0.8s",
    fontWeight: "bold",
    fontSize: "1.6rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: props.buttonAlt ? style.fontColor : style.bgColor,
    color: props.buttonAlt ? style.bgColor : style.fontColor,
    minWidth: "6.4rem",
    "&:focus": {
      outline: "none"
    },
    "&:hover": {
      background: `${style.hoverColor} radial-gradient(circle, transparent 1%, ${style.hoverColor} 1%) center/15000%`
    },
    "&:active": {
      backgroundColor: props.buttonAlt ? style.fontColor : style.bgColor,
      backgroundSize: "100%",
      transition: "background 0s"
    }
  };
});
export default Button;

import styled from "@emotion/styled";

const DEFAULT_STYLING_BADGE = {
  padding: ".4rem .8rem",
  borderRadius: "1rem",
  fontSize: "1.4rem",
  color: "white",
  display: "grid",
  placeItems: "center",
  fontWeight: "bold",
  fontFamily: "var(--titleFont)",
  textTransform: "capitalize"
};
export const BadgeType = styled.span(props => {
  let backgroundColor;
  switch (props.type) {
    case "poison":
      backgroundColor = "#b97fc9";
      break;
    case "water":
      backgroundColor = "#4592c4";
      break;
    case "fighting":
      backgroundColor = "#d56723";
      break;
    case "fire":
      backgroundColor = "#fd7d24";
      break;
    case "grass":
      backgroundColor = "#9bcc50";
      break;
    case "physic":
      backgroundColor = "#f366b9";
      break;
    case "ice":
      backgroundColor = "#51c4e7";
      break;
    case "rock":
      backgroundColor = "#a38c21";
      break;
    case "ground":
      backgroundColor = "#f7de3f";
      break;
    case "steel":
      backgroundColor = "#9eb7b8";
      break;
    case "flying":
      backgroundColor = "#c0c0c0";
      break;
    case "bug":
      backgroundColor = "#729f3f";
      break;
    default:
      backgroundColor = "var(--red)";
  }
  return {
    ...DEFAULT_STYLING_BADGE,
    backgroundColor
  };
});

export const Badge = styled.span(props => {
  return {
    ...DEFAULT_STYLING_BADGE,
    backgroundColor: props.color || "#c0c0c0"
  };
});

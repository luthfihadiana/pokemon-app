import styled from "@emotion/styled";

const Input = styled.input(props => {
  let type = props.inputType || "primary";
  return {
    outline: "none",
    border: `.5px solid ${
      (props.default && "rgba(0, 0, 0, 0.2)") || `var(--${type})`
    }`,
    padding: ".8rem",
    boxShadow:
      "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
    borderRadius: "1rem",
    transition: ".2s all ease-in",
    "&:focus": {
      outline: "none",
      border: `.5px solid var(--${type})`
    }
  };
});
export default Input;

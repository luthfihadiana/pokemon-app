/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, forwardRef, useImperativeHandle } from "react";
import { jsx } from "@emotion/react";
import Styles from "./styles";

import Backdrop from "../../styles/components/Backdrop";
const ModalGeneral = (props, ref) => {
  const [show, setShowModal] = useState(false);
  const showModal = () => {
    document.body.style.overflow = "hidden";
    setShowModal(true);
  };
  const hideModal = () => {
    document.body.style.overflow = "unset";
    setShowModal(false);
  };
  useImperativeHandle(ref, () => {
    return {
      showModal: showModal,
      hideModal: hideModal,
      status: show
    };
  });
  return (
    <Backdrop
      css={[Styles.backdrop, (!show && Styles.hide) || ""]}
      onClick={props.closeOnBackdrop && hideModal}
    >
      <div css={Styles.container}>{props.children}</div>
    </Backdrop>
  );
};

export default forwardRef(ModalGeneral);

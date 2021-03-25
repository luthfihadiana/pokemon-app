/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useRef, useEffect } from "react";
import { jsx } from "@emotion/react";
import { StickyScrollContainer } from "../../styles/layout/container";
import Styles from "./styles";

export default function Header(props) {
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);
  return (
    <StickyScrollContainer
      css={Styles.container}
      position={{
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: props.backgroundOnScroll
      }}
      className={!goingUp ? "sticky" : ""}
    >
      {props.children}
    </StickyScrollContainer>
  );
}

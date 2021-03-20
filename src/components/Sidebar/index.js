/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from "react";
import { jsx } from "@emotion/react";
import Styles from "./styles";
export default function Index() {
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <nav css={Styles.container} className={(!openSidebar && "hide") || ""}>
      <ul css={Styles.itemContainer}>
        <li css={Styles.item}>Pokedex</li>
        <li css={Styles.item}>Bags</li>
      </ul>
      <div css={Styles.indicator} onClick={() => setOpenSidebar(!openSidebar)}>
        <span className={`material-icons ${(!openSidebar && "rotate") || ""}`}>
          keyboard_arrow_left
        </span>
      </div>
    </nav>
  );
}

/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Suspense } from "react";
import { jsx } from "@emotion/react";
import GlobalStyles from "./styles/main";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from "./components/loader";
import Styles from "./app.style";
import Routes from "./routes";
function App() {
  return (
    <Router>
      <React.Fragment>
        <GlobalStyles />
        <div css={Styles.container}>
          <Suspense fallback={<Loader />}>
            <Routes />
          </Suspense>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;

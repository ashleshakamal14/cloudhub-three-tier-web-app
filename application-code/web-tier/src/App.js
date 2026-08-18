import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "./hooks";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Burger, Menu } from "./components";
import FocusLock from "react-focus-lock";

import Home from "./components/Home/Home";
import DatabaseDemo from "./components/DatabaseDemo/DatabaseDemo";
import Architecture from "./components/Architecture/Architecture";
import About from "./components/About/About";

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Router>
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger
              open={open}
              setOpen={setOpen}
              aria-controls={menuId}
            />

            <Menu
              open={open}
              setOpen={setOpen}
              id={menuId}
            />
          </FocusLock>
        </div>

        <main>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/architecture">
              <Architecture />
            </Route>

            <Route path="/db">
              <DatabaseDemo />
            </Route>

            <Route path="/about">
              <About />
            </Route>

          </Switch>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
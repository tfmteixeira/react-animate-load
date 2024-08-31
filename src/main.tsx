// This file is used to test the component in development mode.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Align,
  AnimateLoad,
  AnimationEffect,
} from "./components/animate-load.component";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div style={{ width: "400px", height: "200px" }}>
      <AnimateLoad
        animation={AnimationEffect.PULSE}
        numRows={10}
        customRows={[
          { index: 2, width: "80%" },
          { index: 4, height: "10px" },
          { index: 6, height: "10px", width: "50%" },
        ]}
        align={Align.CENTER}
        rowStyle={{ borderRadius: "50px" }}
      />
    </div>
  </StrictMode>
);

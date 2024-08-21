import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AnimateLoad from ".";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div style={{ width: "200px", height: "200px" }}>
      <AnimateLoad
        animation="spinner"
        size={50}
        color="#3498db"
        duration={1000}
      />
    </div>
  </StrictMode>
);

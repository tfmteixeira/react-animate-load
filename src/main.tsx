// This file is used to test the component in development mode.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AnimateLoad } from "./components/animate-load.component";
import React from "react";

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
  },
  avatarNameWrapper: {
    height: "64px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  nameWrapper: {
    height: "100%",
    width: "250px",
    display: "flex",
    fontFamily: "sans-serif",
  },
  descriptionWrapper: {
    height: "108px",
    width: "330px",
  },
  description: {
    fontFamily: "sans-serif",
    margin: 0,
  },
};

const Demo = () => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div style={{ flexDirection: "column", ...styles.container }}>
      <div style={styles.avatarNameWrapper}>
        {loading ? (
          <AnimateLoad round width="64px" />
        ) : (
          <img
            src="https://avatars.githubusercontent.com/u/18631683?v=4"
            alt="avatar"
            style={{
              background: "cadetblue",
              height: "100%",
              borderRadius: "50%",
            }}
          />
        )}
        {loading ? (
          <AnimateLoad
            width="250px"
            numRows={2}
            gapRow="8px"
            customRows={[{ index: 1, height: "20px", width: "60%" }]}
            animation="wave"
          />
        ) : (
          <div style={{ flexDirection: "column", ...styles.nameWrapper }}>
            <h1 style={{ margin: 0 }}>Tiago Teixeira</h1>
            <p style={{ margin: 0 }}>Software developer</p>
          </div>
        )}
      </div>

      {loading ? (
        <AnimateLoad
          width="330px"
          height="108px"
          numRows={6}
          animation="wave"
          customRows={[
            { index: 0, width: "90%" },
            { index: 1, width: "82%" },
            { index: 2, width: "100%" },
            { index: 3, width: "78%" },
            { index: 4, width: "95%" },
            { index: 5, width: "50%" },
          ]}
        />
      ) : (
        <div style={styles.descriptionWrapper}>
          <p style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
      )}
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Demo />
  </StrictMode>
);

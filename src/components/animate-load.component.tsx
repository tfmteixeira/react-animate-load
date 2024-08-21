import React from "react";
import styles from "./animate-load.module.scss";

interface AnimateLoadProps {
  animation?: "spinner" | "pulse" | "wave";
  size?: number;
  color?: string;
  duration?: number;
}

const AnimateLoad: React.FC<AnimateLoadProps> = ({
  animation = "spinner",
  size = 40,
  color = "#000",
  duration = 800,
}) => {
  return <div className={styles["animateLoadContainer"]}></div>;
};

export default AnimateLoad;

import React from "react";
import "./animate-load.styles.css";

export enum AnimationEffect {
  PULSE = "pulse",
  WAVE = "wave",
}

export enum Align {
  CENTER = "center",
  LEFT = "left",
  RIGHT = "right",
}

export interface CustomRow {
  index: number;
  width?: string;
  height?: string;
}

export interface AnimateLoadProps {
  animation?: AnimationEffect;
  numRows?: number;
  customRows?: CustomRow[];
  gapRow?: string;
  roundCorner?: boolean;
  round?: boolean;
  containerStyle?: React.CSSProperties;
  rowStyle?: React.CSSProperties;
  primaryColor?: string;
  secondaryColor?: string;
  align?: Align;
}

const generateUniqueId = (index: number) => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}-${index}`;
};

const AnimateLoad = ({
  animation = AnimationEffect.PULSE,
  numRows = 1,
  customRows = [],
  gapRow = "4px",
  primaryColor = "#e2e2e2",
  secondaryColor = "#c8c8c8",
  roundCorner = true,
  round = false,
  containerStyle = {},
  rowStyle = {},
  align = Align.LEFT,
}: AnimateLoadProps) => {
  const getCustomRow = (index: number) => {
    const customRow = customRows.find((row) => row.index === index);
    return customRow || undefined;
  };

  return (
    <div
      className="animateLoadContainer"
      style={
        {
          gap: gapRow,
          "--primary-color": primaryColor,
          "--secondary-color": secondaryColor,
          alignItems:
            align === Align.LEFT
              ? "flex-start"
              : align === Align.RIGHT
              ? "flex-end"
              : "center",
          ...(round && {
            borderRadius: "50%",
            aspectRatio: "1/1",
            height: "auto",
          }),
          ...containerStyle,
        } as React.CSSProperties & { [key: string]: string | number }
      }
    >
      {Array.from({ length: numRows }).map((_, index) => (
        <div
          key={generateUniqueId(index)}
          className={`animateLoad ${animation}`}
          style={{
            borderRadius: roundCorner ? "4px" : "0px",
            maxWidth: getCustomRow(index)?.width,
            maxHeight: getCustomRow(index)?.height,
            ...rowStyle,
          }}
        />
      ))}
    </div>
  );
};

export { AnimateLoad };

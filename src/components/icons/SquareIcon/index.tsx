import type { FunctionComponent } from "react";

interface IProps {
  direction: "right" | "left";
}

const SquareIcon: FunctionComponent<IProps> = ({ direction }) => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <svg
      width="40"
      height="37"
      viewBox="0 0 40 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotateX(${direction === "right" ? 0 : 180}deg)` }}
    >
      <rect
        x="0.936523"
        y="0.636887"
        width="38.7765"
        height="36.1914"
        rx="7.75531"
        fill="#333755"
      />
      <path
        d="M14.9993 12.9631H17.9722L24.2282 18.8829L17.9722 24.8287H14.9993L21.2553 18.8829L14.9993 12.9631Z"
        fill="#979797"
      />
    </svg>
  );
};

export default SquareIcon;

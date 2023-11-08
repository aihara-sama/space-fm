import type { FunctionComponent } from "react";

interface IProps {
  direction: "right" | "down";
}

const ToggleArrow: FunctionComponent<IProps> = ({ direction }) => {
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
      width="11"
      height="7"
      viewBox="0 0 11 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotateY(${direction === "right" ? 0 : 90}deg)` }}
    >
      <path
        d="M0.291992 0.895813L5.50033 6.10415L10.7087 0.895813H0.291992Z"
        fill="#262527"
      />
    </svg>
  );
};

export default ToggleArrow;

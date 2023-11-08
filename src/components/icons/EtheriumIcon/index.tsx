import type { FunctionComponent } from "react";

interface IProps {
  size: "small" | "large";
  color: "green" | "white";
}

const EtheriumIcon: FunctionComponent<IProps> = ({ color, size }) => {
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
      width={size === "small" ? 9 : 15}
      height={size === "small" ? 14 : 24}
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.3154 7.13129L4.26572 9.66879L0.213379 7.13129L4.26572 3.05176e-05L8.3154 7.13129ZM4.26572 10.4836L0.213379 7.94613L4.26572 14L8.31806 7.94613L4.26572 10.4836Z"
        fill={color === "green" ? "#00AC4F" : "#fff"}
      />
    </svg>
  );
};

export default EtheriumIcon;

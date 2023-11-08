import type { FunctionComponent } from "react";

interface IProps {
  onClick?: () => void;
}

const DotsIcon: FunctionComponent<IProps> = ({ onClick }) => {
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
      onClick={onClick}
      width="7"
      height="25"
      viewBox="0 0 7 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.271484"
        y="0.807144"
        width="5.81648"
        height="5.81648"
        rx="2.20212"
        fill="#979797"
      />
      <rect
        x="0.271484"
        y="9.92688"
        width="5.81648"
        height="5.81648"
        rx="2.20212"
        fill="#979797"
      />
      <rect
        x="0.271484"
        y="19.0465"
        width="5.81648"
        height="5.81648"
        rx="2.20212"
        fill="#979797"
      />
    </svg>
  );
};

export default DotsIcon;

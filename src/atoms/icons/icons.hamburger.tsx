import { IconProps } from "@types";

export const HamburgerIcon: React.FC<IconProps> = ({
  width = 32,
  height = 32,
}) => {
  return (
    <svg
      id="icon_menu"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <rect
        id="Rectangle_50"
        data-name="Rectangle 50"
        width="32"
        height="32"
        fill="#ff963c"
        opacity="0"
      />
      <line
        id="Line_4"
        data-name="Line 4"
        x2="26"
        transform="translate(3 8)"
        fill="none"
        stroke="#ff963c"
        stroke-width="3"
      />
      <line
        id="Line_5"
        data-name="Line 5"
        x2="26"
        transform="translate(3 16)"
        fill="none"
        stroke="#ff963c"
        stroke-width="3"
      />
      <line
        id="Line_6"
        data-name="Line 6"
        x2="26"
        transform="translate(3 24)"
        fill="none"
        stroke="#ff963c"
        stroke-width="3"
      />
    </svg>
  );
};

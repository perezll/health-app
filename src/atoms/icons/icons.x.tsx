import { IconProps } from "@types";

export const XIcon: React.FC<IconProps> = ({ width = 32, height = 32 }) => {
  return (
    <svg
      id="icon_close"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <rect
        id="Rectangle_49"
        data-name="Rectangle 49"
        width="32"
        height="32"
        fill="#ff963c"
        opacity="0"
      />
      <line
        id="Line_4"
        data-name="Line 4"
        x2="19"
        y2="19"
        transform="translate(7 7)"
        fill="none"
        stroke="#ff963c"
        stroke-width="3"
      />
      <line
        id="Line_6"
        data-name="Line 6"
        y1="19"
        x2="19"
        transform="translate(7 7)"
        fill="none"
        stroke="#ff963c"
        stroke-width="3"
      />
    </svg>
  );
};

import { IconProps } from "@types";

export const NotificationIcon: React.FC<IconProps> = ({
  width = 32,
  height = 32,
}) => {
  return (
    <svg
      id="info_count"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16.5"
    >
      <circle
        id="Ellipse_6"
        data-name="Ellipse 6"
        cx="8"
        cy="8"
        r="8"
        fill="#ea6c00"
      />
      <text
        id="_1"
        data-name="1"
        transform="translate(0 1.5)"
        fill="#fff"
        font-size="10"
        font-family="SegoeUI, Segoe UI"
      >
        <tspan x="5.305" y="11">
          1
        </tspan>
      </text>
    </svg>
  );
};

import { ButtonProps } from "@types";

export const Button: React.FC<ButtonProps> = ({
  disabled = false,
  onClick,
  message = "Button Text",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="inline text-center rounded-md text-white text-18 h-56 w-296 bg-gradient-to-r from-primary-300 to-primary-400 hover:opacity-80"
    >
      {message}
    </button>
  );
};

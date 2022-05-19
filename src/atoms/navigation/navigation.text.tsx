import { NavigationTextProps } from "@types";

export const NavigationText: React.FC<NavigationTextProps> = ({ message }) => {
  return <div className="text-16">{message}</div>;
};

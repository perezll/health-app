import { NavigationTextProps } from "@types";

export const NavigationText: React.FC<NavigationTextProps> = ({ message }) => {
  return (
    <div className="text-16 text-white inline text-left ml-2 w-24">
      {message}
    </div>
  );
};

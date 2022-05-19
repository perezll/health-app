import { MenuLinkProps } from "@types";
import { Link } from "react-router-dom";

export const MenuLink: React.FC<MenuLinkProps> = ({ message }) => {
  return (
    <Link
      to={"/"}
      className="w-280 h-72px pl-9 text-18 inline-flex hover:bg-dark-500 items-center text-white bg-gray-400 border-t border-b border-t-white/10 border-b-dark-600/25"
    >
      {message}
    </Link>
  );
};

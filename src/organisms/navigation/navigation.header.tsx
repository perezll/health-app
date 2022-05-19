import { Outlet } from "react-router-dom";
import {
  PaperIcon,
  RibbonIcon,
  InfoIcon,
  HamburgerIcon,
  XIcon,
} from "@atoms/icons";
import { MainLogo } from "@atoms/logo";
import { NavigationText } from "@atoms/navigation";

export const Header: React.FC = () => {
  return (
    <>
      <div>Header</div>
      <MainLogo width={500} height={250} />
      <PaperIcon />
      <RibbonIcon />
      <InfoIcon />
      <HamburgerIcon />
      <NavigationText message="自分の記録" />
      <XIcon />
      <Outlet />
    </>
  );
};

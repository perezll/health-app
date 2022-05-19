import { Link, Outlet } from "react-router-dom";
import { MainLogo } from "@atoms/logo";
import { NavigationMemo } from "@molecules/navigation";
import { HamburgerIcon, PaperIcon, RibbonIcon, InfoIcon } from "@atoms/icons";
import { Menu } from "@organisms/navigation";
import { useState } from "react";

export const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="bg-dark-500 shadow-md">
        <div className="h-64px  mx-40 relative flex items-center justify-between">
          <Link to="/">
            <MainLogo height={64} width={144} />
          </Link>

          <nav>
            <ul className="inline-flex">
              <li>
                <Link to={"/myrecords"}>
                  <NavigationMemo Icon={<PaperIcon />} message={"自分の記録"} />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <NavigationMemo
                    Icon={<RibbonIcon />}
                    message={"チャレンジ"}
                  />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <NavigationMemo
                    Icon={<InfoIcon />}
                    hasNotification={true}
                    count={1}
                    message={"お知らせ"}
                  />
                </Link>
              </li>
              <li className="relative">
                {open && (
                  <div className="fixed z-50">
                    <Menu closeMenu={() => setOpen(false)} />
                  </div>
                )}
                <div
                  onClick={() => handleOpenMenu()}
                  className="w-40 h-12 flex items-center justify-end hover:cursor-pointer"
                >
                  <HamburgerIcon />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
};

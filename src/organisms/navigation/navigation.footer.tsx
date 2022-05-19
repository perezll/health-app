import { Link, Outlet } from "react-router-dom";
import { MainLogo } from "@atoms/logo";
import { NavigationMemo } from "@molecules/navigation";
import { HamburgerIcon } from "@atoms/icons";

export const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-dark-500 mt-24 bottom-0">
        <div className="h-32  mx-40 relative flex items-center justify-between">
          <nav>
            <ul className="inline-flex text-white text-11 ">
              <li className="mr-20">
                <Link to={"/"}>会員登録</Link>
              </li>
              <li className="mr-20">
                <Link to={"/"}>運営会社</Link>
              </li>
              <li className="mr-20">
                <Link to={"/"}>利用規約</Link>
              </li>
              <li className="mr-20">
                <Link to={"/"}>個人情報の取扱について</Link>
              </li>
              <li className="mr-20">
                <Link to={"/"}>特定商取引法に基づく表記</Link>
              </li>
              <li className="mr-20">
                <Link to={"/"}>お問い合わせ</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
};

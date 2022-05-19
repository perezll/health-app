import { XIcon } from "@atoms/icons";
import { MenuLink } from "@atoms/navigation";
import { MenuLinkProps, MenuProps } from "@types";

const menuLinks: MenuLinkProps[] = [
  {
    message: "自分の記録",
  },
  {
    message: "体重グラフ",
  },
  {
    message: "目標",
  },
  {
    message: "選択中のコース",
  },
  {
    message: "コラム一覧",
  },
  {
    message: "設定",
  },
];

export const Menu: React.FC<MenuProps> = ({ closeMenu }) => {
  return (
    <div className="w-280">
      <div className=" flex justify-end">
        <div
          onClick={() => closeMenu()}
          className="bg-dark-500 hover:cursor-pointer hover:bg-dark-600"
        >
          <XIcon />
        </div>
      </div>
      {menuLinks.map((item, index) => (
        <MenuLink message={item.message} key={index} />
      ))}
    </div>
  );
};

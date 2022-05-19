import {
  NavigationHexagonItemMorning,
  NavigationHexagonItemDinner,
  NavigationHexagonItemSnack,
  NavigationHexagonItemLunch,
} from "@molecules/navigation";

export const HexagonMenu: React.FC = () => {
  return (
    <div className="my-6 flex justify-center">
      <button className="mx-10 hover:opacity-80">
        <NavigationHexagonItemMorning />
      </button>
      <button className="mx-10 hover:opacity-80">
        <NavigationHexagonItemLunch />
      </button>
      <button className="mx-10 hover:opacity-80">
        <NavigationHexagonItemDinner />
      </button>
      <button className="mx-10 hover:opacity-80">
        <NavigationHexagonItemSnack />
      </button>
    </div>
  );
};

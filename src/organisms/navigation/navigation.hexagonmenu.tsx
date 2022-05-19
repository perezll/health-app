import {
  NavigationHexagonItemMorning,
  NavigationHexagonItemDinner,
  NavigationHexagonItemSnack,
  NavigationHexagonItemLunch,
} from "@molecules/navigation";

export const HexagonMenu: React.FC = () => {
  return (
    <div className="my-6 flex justify-center">
      <button className="mx-10">
        <NavigationHexagonItemMorning />
      </button>
      <button className="mx-10">
        <NavigationHexagonItemLunch />
      </button>
      <button className="mx-10">
        <NavigationHexagonItemDinner />
      </button>
      <button className="mx-10">
        <NavigationHexagonItemSnack />
      </button>
    </div>
  );
};

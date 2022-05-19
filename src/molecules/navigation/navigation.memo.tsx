import { NavigationText } from "@atoms/navigation";
import { NavMemoProps } from "@types";
import { PaperIcon } from "@atoms/icons";

export const NavigationMemo: React.FC<NavMemoProps> = ({
  Icon = <PaperIcon />,
  message,
}) => {
  return (
    <div className="w-40 h-12 flex items-center">
      {Icon}
      <NavigationText message={message} />
    </div>
  );
};

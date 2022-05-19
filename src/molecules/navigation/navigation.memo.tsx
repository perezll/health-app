import { NavigationText } from "@atoms/navigation";
import { NavMemoProps } from "@types";
import { PaperIcon } from "@atoms/icons";

export const NavigationMemo: React.FC<NavMemoProps> = ({
  Icon = <PaperIcon />,
  message,
  hasNotification = false,
  count = 0,
}) => {
  return (
    <div className="w-40 h-12 flex items-center">
      <div className="relative flex justify-end">
        {hasNotification && (
          <div className="absolute font-inter text-white text-10 -mr-1 bg-primary-400 text-center rounded-lg h-4 w-4">
            {count}
          </div>
        )}
        {Icon}
      </div>
      <NavigationText message={message} />
    </div>
  );
};

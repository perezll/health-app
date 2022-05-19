import { ArticleProps } from "@types";

export const Section2: React.FC<ArticleProps> = ({
  date,
  img,
  primaryMessage,
  secondaryMessage,
}) => {
  return (
    <div className="w-auto h-224px">
      <div className="relative z-0 overflow-hidden h-36 flex items-end">
        <div className="absolute z-10 font-inter text-15 text-white py-px pl-1 w-6/12 bg-primary-300">
          {date}
        </div>
        <img
          src={img}
          alt="food-img"
          className="relative h-full w-full object-cover"
        />
      </div>
      <div className="mt-2">
        <div className="relative text-15">{primaryMessage}</div>
        <div className="relative text-primary-400 text-12 mt-2">
          {secondaryMessage}
        </div>
      </div>
    </div>
  );
};

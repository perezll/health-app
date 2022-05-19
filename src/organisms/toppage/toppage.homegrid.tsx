import { HomeGridPhotoProps } from "@types";

export const HomeGridPhoto: React.FC<HomeGridPhotoProps> = ({
  img,
  message,
}) => {
  return (
    <div className="relative z-0 w-full h-234 overflow-hidden  flex items-end">
      <div className="absolute z-10 font-inter text-15  text-white py-px pl-1 w-6/12 bg-primary-300">
        {message}
      </div>
      <img
        src={img}
        alt="food-img"
        className="relative h-full w-full object-cover"
      />
    </div>
  );
};

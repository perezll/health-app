import { Outlet } from "react-router-dom";
import { Container } from "@atoms/container";
import food from "../assets/images/d01.jpg";
import { PhotoMainText, PhotoGraph } from "@atoms/photo";
import { HexagonMenu } from "../organisms/navigation";
import { HomeGridPhoto } from "@organisms/toppage";
import img1 from "../assets/images/m01.jpg";
import img2 from "../assets/images/l03.jpg";
import img3 from "../assets/images/d01.jpg";
import img4 from "../assets/images/l01.jpg";
import img5 from "../assets/images/l02.jpg";

import { Button } from "@atoms/buttons";
import { HomeGridPhotoProps } from "@types";

const gridItems: HomeGridPhotoProps[] = [
  {
    img: img1,
    message: "05.21.Morning",
  },
  {
    img: img2,
    message: "05.21.Lunch",
  },
  {
    img: img3,
    message: "05.21.Dinner",
  },
  {
    img: img4,
    message: "05.21.Snack",
  },
  {
    img: img4,
    message: "05.21.Morning",
  },
  {
    img: img5,
    message: "05.21.Lunch",
  },
  {
    img: img2,
    message: "05.21.Dinner",
  },
  {
    img: img1,
    message: "05.21.Snack",
  },
];

export const Home: React.FC = () => {
  return (
    <>
      <Container>
        <div className="relative w-full h-312px flex overflow-hidden">
          <div className="relative z-0">
            <div className="absolute z-10 w-full h-full flex items-center justify-center">
              <PhotoMainText />
            </div>
            <img src={food} alt="food" className="object-cover" />
          </div>
          <div className="bg-dark-600 w-8/12">
            <div className="flex items-center  h-full  justify-center">
              <PhotoGraph />
            </div>
          </div>
        </div>
        <div className="mx-40">
          <HexagonMenu />
          <div className="grid grid-cols-4 gap-2">
            {gridItems.map((item, index) => (
              <HomeGridPhoto
                key={index}
                img={item.img}
                message={item.message}
              />
            ))}
          </div>
          <div className="flex items-center justify-center my-9">
            <Button
              message="記録をもっと見る"
              onClick={() => alert("Clicked")}
            />
          </div>
        </div>
      </Container>
      <Outlet />
    </>
  );
};

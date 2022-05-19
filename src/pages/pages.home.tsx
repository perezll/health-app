import { Outlet } from "react-router-dom";
import { Container } from "@atoms/container";
import food from "../assets/images/d01.jpg";
import { PhotoMainText, PhotoGraph } from "@atoms/photo";
import { HexagonMenu } from "../organisms/navigation";
import { HomeGridPhoto } from "@organisms/toppage";
import imgItem from "../assets/images/m01.jpg";
import { Button } from "@atoms/buttons";

export const Home: React.FC = () => {
  return (
    <>
      <Container>
        <div className="relative w-full h-312px flex overflow-hidden">
          <div className="relative z-0">
            <div className="absolute z-10 w-full h-full flex items-center justify-center">
              <PhotoMainText />
            </div>
            <img src={food} alt="food" />
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
            <HomeGridPhoto img={imgItem} message="05.21.Morning" />
            <HomeGridPhoto img={imgItem} message="05.21.Morning" />
            <HomeGridPhoto img={imgItem} message="05.21.Morning" />
            <HomeGridPhoto img={imgItem} message="05.21.Morning" />
            <HomeGridPhoto img={imgItem} message="05.21.Morning" />
            <HomeGridPhoto img={imgItem} message="05.21.Morning" />
            <HomeGridPhoto img={imgItem} message="05.21.Morning" />
            <HomeGridPhoto img={imgItem} message="05.21.Morning" />
          </div>
          <div className="flex items-center justify-center my-6 ">
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

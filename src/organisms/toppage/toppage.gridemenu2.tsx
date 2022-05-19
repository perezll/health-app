import img1 from "../../assets/images/mr1.jpg";
import img2 from "../../assets/images/mr2.jpg";
import img3 from "../../assets/images/mr3.jpg";

export const GridMenu2: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="bg-primary-300 w-72 h-72 mt-16 flex items-center content-center  justify-center">
        <div className="relative w-60 h-60 flex items-center content-center justify-center">
          <div className="absolute z-20 text-center">
            <div className="font-inter text-25 text-primary-300 uppercase">
              Body Record
            </div>
            <div className="text-white text-14 bg-primary-400">
              自分のカラダの記録
            </div>
          </div>
          <div className="absolute z-10 w-full h-full bg-dark-600/60"></div>
          <img
            src={img1}
            alt="img1"
            className="relative w-full h-full object-cover grayscale"
          />
        </div>
      </div>
      <div className="bg-primary-300 w-72 h-72 mt-16 flex items-center content-center  justify-center">
        <div className="relative w-60 h-60 flex items-center content-center justify-center">
          <div className="absolute z-20 text-center">
            <div className="font-inter text-25 text-primary-300 uppercase">
              My Exercise
            </div>
            <div className="text-white text-14 bg-primary-400">
              自分の運動の記録
            </div>
          </div>
          <div className="absolute z-10 w-full h-full bg-dark-600/60"></div>
          <img
            src={img2}
            alt="img1"
            className="relative w-full h-full object-cover grayscale"
          />
        </div>
      </div>
      <div className="bg-primary-300 w-72 h-72 mt-16 flex items-center content-center  justify-center">
        <div className="relative w-60 h-60 flex items-center content-center justify-center">
          <div className="absolute z-20 text-center">
            <div className="font-inter text-25 text-primary-300 uppercase">
              My Diary
            </div>
            <div className="text-white text-14 bg-primary-400">自分の日記</div>
          </div>
          <div className="absolute z-10 w-full h-full bg-dark-600/60"></div>
          <img
            src={img3}
            alt="img1"
            className="relative w-full h-full object-cover grayscale"
          />
        </div>
      </div>
    </div>
  );
};

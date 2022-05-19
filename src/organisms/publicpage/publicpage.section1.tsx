export const Section1: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="w-216 h-36 bg-dark-600 p-5">
        <div className="w-auto h-16 p-1  text-primary-300 my-auto  uppercase font-inter text-22 text-center">
          Recommended Column
        </div>
        <div className="border-b-2 border-b-white mt-2 w-3/12 mx-auto"></div>
        <div className="text-white text-18 mt-1 text-center">オススメ</div>
      </div>
      <div className="w-216 h-36 bg-dark-600 p-5">
        <div className="w-auto h-16 p-1  text-primary-300 my-auto  uppercase font-inter text-22 text-center">
          RECOMMENDED DIET
        </div>
        <div className="border-b-2 border-b-white mt-2 w-3/12 mx-auto"></div>
        <div className="text-white text-18 mt-1 text-center">ダイエット</div>
      </div>
      <div className="w-216 h-36 bg-dark-600 p-5">
        <div className="w-auto h-16 p-1  text-primary-300 my-auto  uppercase font-inter text-22 text-center">
          RECOMMENDED BEAUTY
        </div>
        <div className="border-b-2 border-b-white mt-2 w-3/12 mx-auto"></div>
        <div className="text-white text-18 mt-1 text-center">美容</div>
      </div>
      <div className="w-216 h-36 bg-dark-600 p-5">
        <div className="w-auto h-16 p-1  text-primary-300 my-auto  uppercase font-inter text-22 text-center">
          RECOMMENDED HEALTH
        </div>
        <div className="border-b-2 border-b-white mt-2 w-3/12 mx-auto"></div>
        <div className="text-white text-18 mt-1 text-center">健康</div>
      </div>
    </div>
  );
};

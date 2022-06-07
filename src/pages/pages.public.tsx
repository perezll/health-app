import { Outlet } from "react-router-dom";
import { Container } from "@atoms/container";
import { Section1, Section2 } from "@organisms/publicpage";
import { ArticleProps } from "@types";
import img1 from "../assets/images/column-1.jpg";
import img2 from "../assets/images/column-2.jpg";
import img3 from "../assets/images/column-3.jpg";
import img4 from "../assets/images/column-4.jpg";
import img5 from "../assets/images/column-5.jpg";
import img6 from "../assets/images/column-6.jpg";
import img7 from "../assets/images/column-7.jpg";
import img8 from "../assets/images/column-8.jpg";
import { Button } from "@atoms/buttons";
import { useEffect, useState } from "react";
import { BackOnTopIcon } from "@atoms/icons";

const articles: ArticleProps[] = [
  {
    date: "2021.05.17   23:25",
    img: img1,
    primaryMessage:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    secondaryMessage: "#魚料理  #和食  #DHA",
  },
  {
    date: "2021.05.17   23:25",
    img: img2,
    primaryMessage:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    secondaryMessage: "#魚料理  #和食  #DHA",
  },
  {
    date: "2021.05.17   23:25",
    img: img3,
    primaryMessage:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    secondaryMessage: "#魚料理  #和食  #DHA",
  },
  {
    date: "2021.05.17   23:25",
    img: img4,
    primaryMessage:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    secondaryMessage: "#魚料理  #和食  #DHA",
  },
  {
    date: "2021.05.17   23:25",
    img: img5,
    primaryMessage:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    secondaryMessage: "#魚料理  #和食  #DHA",
  },
  {
    date: "2021.05.17   23:25",
    img: img6,
    primaryMessage:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    secondaryMessage: "#魚料理  #和食  #DHA",
  },
  {
    date: "2021.05.17   23:25",
    img: img7,
    primaryMessage:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    secondaryMessage: "#魚料理  #和食  #DHA",
  },
  {
    date: "2021.05.17   23:25",
    img: img8,
    primaryMessage:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    secondaryMessage: "#魚料理  #和食  #DHA",
  },
];

export const Public: React.FC = () => {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Container>
        <div className="relative">
          {showScroll && (
            <div
              onClick={() => goToTop()}
              className="fixed z-30 right-16 bottom-2/4 hover:cursor-pointer"
            >
              <BackOnTopIcon />
            </div>
          )}
          <div className="mx-40">
            <div className="mt-16">
              <Section1 />
            </div>
            <div className="mt-16 grid grid-cols-4 gap-x-2 gap-y-8">
              {articles.map((item, index) => (
                <Section2
                  key={index}
                  date={item.date}
                  img={item.img}
                  primaryMessage={item.primaryMessage}
                  secondaryMessage={item.secondaryMessage}
                />
              ))}
            </div>
            <div className="flex items-center justify-center my-9 ">
              <Button
                message="コラムをもっと見る"
                onClick={() => alert("Clicked")}
              />
            </div>
          </div>
        </div>
      </Container>
      <Outlet />
    </>
  );
};

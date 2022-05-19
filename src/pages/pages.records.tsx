import { Outlet } from "react-router-dom";
import { Container } from "@atoms/container";
import { GridMenu2, BodyRecord, MyExercise, MyDiary } from "@organisms/toppage";
import { Button } from "@atoms/buttons";
import { DiaryProps } from "@types";
import { useState, useEffect } from "react";
import { BackOnTopIcon } from "@atoms/icons";

const diaries: DiaryProps[] = [
  {
    date: "2021.05.21   23:25",
    message:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21   23:25",
    message:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21   23:25",
    message:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21   23:25",
    message:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21   23:25",
    message:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21   23:25",
    message:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21   23:25",
    message:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21   23:25",
    message:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
];

export const Records: React.FC = () => {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
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
            <GridMenu2 />
            <div className="mt-16">
              <BodyRecord />
            </div>
            <div className="mt-16">
              <MyExercise />
            </div>
            <div className="mt-16">
              <div className="font-inter text-22">My Diary</div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {diaries.map((diary, index) => (
                <MyDiary
                  key={index}
                  date={diary.date}
                  message={diary.message}
                />
              ))}
            </div>
            <div className="flex items-center justify-center my-9 ">
              <Button
                message="自分の日記をもっと見る"
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

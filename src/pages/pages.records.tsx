import { Outlet } from "react-router-dom";
import { Container } from "@atoms/container";
import { GridMenu2, BodyRecord, MyExercise, MyDiary } from "@organisms/toppage";
import { Button } from "@atoms/buttons";
import { DiaryProps } from "@types";

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
  return (
    <>
      <Container>
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
              <MyDiary key={index} date={diary.date} message={diary.message} />
            ))}
          </div>
          <div className="flex items-center justify-center my-9 ">
            <Button
              message="自分の日記をもっと見る"
              onClick={() => alert("Clicked")}
            />
          </div>
        </div>
      </Container>
      <Outlet />
    </>
  );
};

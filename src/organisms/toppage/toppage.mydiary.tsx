import { DiaryProps } from "@types";

export const MyDiary: React.FC<DiaryProps> = ({ date, message }) => {
  return (
    <div className="w-auto h-231px border p-4">
      <div className="w-52">{date}</div>
      <div className="w-52 mt-6 break-words text-12">{message}</div>
    </div>
  );
};

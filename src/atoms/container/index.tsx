type Props = {
  children?: React.ReactNode;
};

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">{children}</div>
    </div>
  );
};

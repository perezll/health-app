import { Outlet } from "react-router-dom";
import { Container } from "@atoms/container";

export const Records: React.FC = () => {
  return (
    <>
      <Container>
        <div className="mx-40"></div>
      </Container>
      <Outlet />
    </>
  );
};

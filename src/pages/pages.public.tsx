import { Outlet } from "react-router-dom";
import { Container } from "@atoms/container";
import { Section1 } from "@organisms/publicpage";

export const Public: React.FC = () => {
  return (
    <>
      <Container>
        <div className="mx-40">
          <div className="mt-16">
            <Section1 />
          </div>
        </div>
      </Container>
      <Outlet />
    </>
  );
};

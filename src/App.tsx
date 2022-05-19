import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./organisms/navigation";
import { Home, Records } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/myrecords" element={<Records />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

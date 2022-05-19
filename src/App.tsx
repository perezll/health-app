import { Routes, Route } from "react-router-dom";
import { Header } from "./organisms/navigation";
import { Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { route } from "./global/configs/routes";
import { Header, Footer } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {route.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

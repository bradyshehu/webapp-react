import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

import HomePage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import MoviesPage from "./pages/MoviesPage";
import MoviesDetailsPage from "./pages/MovieDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/movies">
            <Route index element={<MoviesPage />} />
            <Route path=":id" element={<MoviesDetailsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

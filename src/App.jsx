import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

import MoviesPage from "./pages/MoviesPage";
import MovieReviewsPage from "./pages/MovieReviewsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<MoviesPage />} />
          <Route path=":id" element={<MovieReviewsPage />} />{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

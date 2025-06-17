import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

import MoviesPage from "./pages/MoviesPage";
import MoviesDetailsPage from "./pages/MovieDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<MoviesPage />} />
          <Route path=":id" element={<MoviesDetailsPage />} />{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

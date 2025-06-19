import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

import MoviesPage from "./pages/MoviesPage";
import MovieReviewsPage from "./pages/MovieReviewsPage";
import { LoadingProvider } from "./context/LoadingContext";

export default function App() {
  return (
    <LoadingProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<MoviesPage />} />
            <Route path="movies">
              <Route index element={<MoviesPage />} />
              <Route path=":id" element={<MovieReviewsPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </LoadingProvider>
  );
}

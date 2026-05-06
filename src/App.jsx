import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/header/Navbar";
import MyFooter from "./components/footer/Footer";
import Home from "./components/homepage/Home";
import ProfilePage from "./components/formPage/Form";
import { Routes, Route } from "react-router-dom";
import TvShows from "./components/TV-SHOWS/TvShows";
import DetailsPage from "./components/detailsPage/DetailsPage";

function App() {
  return (
    <div
      className="d-flex flex-column min-vh-100 bg-black"
      data-bs-theme="dark"
    >
      <header>
        <MyNavbar />
      </header>
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profilePage" element={<ProfilePage />} />
          <Route path="/tv-shows" element={<TvShows/>} />
          <Route path="/DetailsPage/:filmId" element={<DetailsPage/>} />
        </Routes>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/header/Navbar";
import MyFooter from "./components/footer/Footer";
import Home from "./components/homepage/Home";
import ProfilePage from "./components/editProfilePage/Form";

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
        <Home />
        <ProfilePage />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;

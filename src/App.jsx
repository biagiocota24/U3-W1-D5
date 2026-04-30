import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar";
import MyFooter from "./components/Footer";
import ScrollRow from "./components/ScrollRow";
const starWars = "&s=star wars "
const potter = "&s=harry potter"
const avengers = "&s=avengers"
const sbagliato = "gdjsfghjdgfhshfgshgf"


function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-black" data-bs-theme="dark">
      <header>
      <MyNavbar/>
      </header>
      <main className="flex-grow-1">
        <ScrollRow category="Star Wars" search = {starWars}/>
        <ScrollRow category="QUI C'É UN ERRORE" search = {sbagliato}/>
        <ScrollRow category="Harry Potter" search = {potter}/>
        <ScrollRow category="Il signore degli anelli" search = {avengers}/>
      </main>
      <footer>
        <MyFooter/>
      </footer>
    </div>
  );
}

export default App;

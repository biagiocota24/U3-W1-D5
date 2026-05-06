import ScrollRow from "./ScrollRow";
const starWars = "&s=star wars ";
const potter = "&s=harry potter";
const avengers = "&s=avengers";
const sbagliato = "gdjsfghjdgfhshfgshgf";

const Home = function () {
  return (
    <div>
      <ScrollRow category="Star Wars" search={starWars} />
      <ScrollRow category="Qui c'é un errore" search={sbagliato} />
      <ScrollRow category="Harry Potter" search={potter} />
      <ScrollRow category="Il signore degli anelli" search={avengers} />
    </div>
  );
};


export default Home
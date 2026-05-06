import { useEffect, useState } from "react";
import { Card, Alert, Spinner } from "react-bootstrap";
import netflixNotFound from "../../assets/netflix_not_found.svg"; //
import { Navigate, useNavigate } from "react-router-dom";
const placeholderCard = (
  <div className="d-flex justify-content-around">
    <Card style={{ width: "180px", height: "250px" }}>
      <Card.Img
        variant="top"
        src="holder.js/100px180"
        className="bg-secondary"
      />
    </Card>
  </div>
);

const API = "https://www.omdbapi.com/?apikey=f036561";

const ScrollRow = function (props) {
  const navigate = useNavigate();

  const [films, setFilms] = useState([]);
  const [placeholders, setPlaceholders] = useState(10);
  const [error, setError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    fetch(API + props.search)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("errore nel caricamento!!");
      })
      .then((data) => {
        console.log(data);
        if (data.Response === "False") {
          setError(true);
          return;
        }
        if (data.Search) setFilms(data.Search);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 10000);
      });
  },[]);

  return (
    <div className="">
      {error === false && <h4 className="text-white px-3">{props.category}</h4>}
      {error && showAlert && (
        <div className="text-center">
          <h4 className="text-white px-3 text-start">{props.category}</h4>
          <Alert variant="danger" className="text-center mt-5">
            Errore nel caricamento di {props.category}!
          </Alert>
          <Spinner animation="grow" variant="danger" />
        </div>
      )}
      <div className="overflow-scroll d-flex gap-3 py-4 px-3 scroll-row">
        {films.length === 0 &&
          !error &&
          Array.from({ length: 10 }).map((_, i) => {
            return <div key={i}>{placeholderCard}</div>;
          })}
        {films.map((movie) => {
          return (
            <div
              key={movie.imdbID}
              className="single-movie"
              onClick={() => {
                navigate(`/DetailsPage/${movie.imdbID}`);
              }}
            >
              <img
                src={movie.Poster}
                alt="Cover-movie"
                style={{ width: "180px" }}
                className="rounded-2 z-1"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = netflixNotFound;
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollRow;

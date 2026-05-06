import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Spinner, Card, Button, Row, Col } from "react-bootstrap";
const API = "https://www.omdbapi.com/?apikey=f036561";

const DetailsPage = function () {
  const [error, setError] = useState(false);
  const [detailFilm, setDetailFilm] = useState({});

  const params = useParams();
  console.log(params);

  const errorAlert = function () {
    return (
      <Alert variant="danger" className="text-center mt-5">
        Errore nel caricamento di {props.category}!
        <Spinner animation="grow" variant="danger" />
      </Alert>
    );
  };

  const callDate = function () {
    fetch(`${API}&i=${params.filmId}`)
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
        setDetailFilm(data);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  };

  useEffect(() => {
    callDate();
  }, []);

  return (
    <Row className="justify-content-center">
      <Col xs={6} md={3} lg={2}>
        <Card>
          <Card.Img variant="top" src={detailFilm.Poster} />
          <Card.Body>
            <Card.Title>{detailFilm.Title}</Card.Title>
            {/* <Card.text>{detailFilm.Awards}</Card.text> */}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default DetailsPage;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Spinner, Card , Row, Col } from "react-bootstrap";
const API = "https://www.omdbapi.com/?apikey=f036561";

const DetailsPage = function () {
  const [error, setError] = useState(false);
  const [detailFilm, setDetailFilm] = useState({});

  const params = useParams();

  const errorAlert = function () {
    return (
      <Alert variant="danger" className="text-center mt-5">
        Errore nel caricamento di {detailFilm.title}!
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

  const c= console.log
  c(detailFilm)

  return (
    <Row className="justify-content-center">
      <Col xs={6} md={3} lg={2}>
        <Card>
          <Card.Img variant="top" src={detailFilm.Poster} />
          <Card.Body>
            <Card.Title className="border-bottom pb-2 text-center">{detailFilm.Title}</Card.Title>
            <Card.Text>{detailFilm.Awards}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default DetailsPage;

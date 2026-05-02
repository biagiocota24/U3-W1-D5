import { Component } from "react";
import { Card, Alert, Spinner } from "react-bootstrap";
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
class ScrollRow extends Component {
  state = {
    films: [],
    placeholders: 10,
    error: false,
    showAlert: false,
  };

  componentDidMount() {
    fetch(API + this.props.search)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("errore nel caricamento!!");
      })
      .then((data) => {
        console.log(data);
        if (data.Response === "False") {
          this.setState({ error: true });
          return;
        }
        if (data.Search) this.setState({ films: data.Search });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error: true, showAlert: true });
        setTimeout(() => {
          this.setState({ showAlert: false });
        }, 10000);
      });
  }
  render() {
    console.log(this.state.films);
    return (
      <div className="">
        <h4 className="text-white px-3">{this.props.category}</h4>
        {this.state.error && this.state.showAlert && (
          <div className="text-center">
            <Alert variant="danger" className="text-center mt-5">
              Errore nel caricamento di {this.props.category}!
            </Alert>
            <Spinner animation="grow" variant="danger" />
          </div>
        )}
        <div className="overflow-scroll d-flex gap-3 py-4 px-3 scroll-row">
          {this.state.films.length === 0 &&
            !this.state.error &&
            Array.from({ length: 10 }).map((_, i) => {
              return <div key={i}>{placeholderCard}</div>;
            })}
          {this.state.films.map((movie) => {
            return (
              <div key={movie.imdbID} className="single-movie">
                <img
                  src={movie.Poster}
                  alt="kitten"
                  style={{ width: "180px" }}
                  className="rounded-2 z-1"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ScrollRow;

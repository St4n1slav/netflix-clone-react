import { Component } from "react";
import { Spinner, Alert, Row } from "react-bootstrap";
import MyFilm from "./MyFilm";

class MyFilmList extends Component {
  state = {
    films: [],
    isLoading: false,
    hasError: false,
    errorMessage: "",
  };

  fetchFilms = async () => {
    try {
      this.setState({ isLoading: true });

      const response = await fetch(`http://www.omdbapi.com/?s=${this.props.filmName}&apikey=72b6ee4a`);
      const json = await response.json();
      this.setState({ films: json.Search.slice(0, 5) });
    } catch (error) {
      console.error("Errore nel reperimento dei dati: ", error);
      this.setState({ hasError: true, errorMessage: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner animation="border" role="status" variant="warning" className="d-block mx-auto p-3"></Spinner>;
    } else if (this.state.hasError) {
      return <Alert variant="danger">{this.state.errorMessage ? this.state.errorMessage : "Errore"}</Alert>;
    }
    return (
      <>
        <h5 className="filmTitle">{this.props.filmName}</h5>
        <Row className="my-3" sm={2} md={4} xl={6}>
          {this.state.films.map((src) => (
            <MyFilm key={src.imdbID} filmId={src.imdbID} />
          ))}
        </Row>
      </>
    );
  }
}

export default MyFilmList;

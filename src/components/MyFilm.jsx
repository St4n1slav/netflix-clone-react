import { Component } from "react";
import { Col, Image, Spinner, Alert, Container } from "react-bootstrap";

class MyFilm extends Component {
  state = {
    film: {},
    isLoading: false,
    hasError: false,
    errorMessage: "",
  };

  fetchFilms = async () => {
    try {
      this.setState({ isLoading: true });

      const response = await fetch(`http://www.omdbapi.com/?i=${this.props.filmId}&apikey=72b6ee4a`);
      const json = await response.json();
      this.setState({ film: json });
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
        <Container className="filmCont">
          <Col className="my-1 text-center">
            <Image src={this.state.film.Poster} alt="posterImg" className="posterImg" />
          </Col>
        </Container>
      </>
    );
  }
}

export default MyFilm;

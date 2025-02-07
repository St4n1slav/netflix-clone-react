import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const MyFooter = () => {
  return (
    <footer className="mt-5">
      <Container fluid>
        <Row className="justify-content-center">
          <Col md={6}>
            <Row>
              <Col className="mb-2">
                <Facebook className="footer-icon me-2" />
                <Instagram className="footer-icon me-2" />
                <Twitter className="footer-icon me-2" />
                <Youtube className="footer-icon" />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="footer-links d-flex flex-column">
                  <a href="#" className="footerLink text-secondary">
                    Audio and Subtitles
                  </a>
                  <a href="#" className="footerLink text-secondary">
                    Media Center
                  </a>
                  <a href="#" className="footerLink text-secondary">
                    Privacy
                  </a>
                  <a href="#" className="footerLink text-secondary">
                    Contact us
                  </a>
                </div>
              </Col>

              <Col>
                <div className="footer-links d-flex flex-column">
                  <a href="#" className="footerLink text-secondary">
                    Audio Description
                  </a>
                  <a href="#" className="footerLink text-secondary">
                    Investor Relations
                  </a>
                  <a href="#" className="footerLink text-secondary">
                    Legal Notices
                  </a>
                </div>
              </Col>

              <Col>
                <div className="footer-links d-flex flex-column">
                  <a href="#" className="footerLink text-secondary">
                    Help Center
                  </a>
                  <a href="#" className="footerLink text-secondary">
                    Jobs
                  </a>
                  <a href="#" className="footerLink text-secondary">
                    Cookie Preferences
                  </a>
                </div>
              </Col>

              <Col>
                <div className="footer-links d-flex flex-column">
                  <a href="#" className="footerLink text-secondary">
                    Gift Cards
                  </a>
                  <a href="#" className="footerLink text-secondary">
                    Terms of Use
                  </a>
                  <a href="#" className="footerLink text-secondary">
                    Corporate Information
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="my-3">
                <Button size="sm" className="py-1 px-2 border border-1 border-secondary bg-black text-secondary">
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="my-1 copyright">&copy; 1997-2025 Netflix, Inc.</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;

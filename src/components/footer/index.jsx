
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";




export default function Footer() {


  return (
    <>
      <footer
        className="footer"
        id="footer"
      >
        <Container>
       

      

          <Row>
          <div className="footer">
            <div className="copywrite">
              <p style={{
                fontSize:"1rem", textAlign:"center"
              }}>
                © {new Date().getFullYear()} All rights reserved | Made with ❤️
                by Tunde Fadipe
              </p>
            </div>
          </div>
          </Row>
        </Container>
      </footer>
    </>
  );
}

import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer fixed-bottom bg-dark text-light py-3">
      <Container>
        &copy; 2022 Copyright Przetwarzanie danych w chmurach Tomasz Szkaradek
      </Container>
    </footer>
  );
};

export default Footer;
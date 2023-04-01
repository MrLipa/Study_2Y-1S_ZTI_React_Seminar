import { Outlet } from "react-router-dom"
import { Container } from "react-bootstrap";

export function BooksLayout() {
  return (
    <Container>
      <h1
        className="text-center border rounded p-3"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        Księgarnia
      </h1>

      <Outlet />
      
    </Container>
  )
}

export default BooksLayout;
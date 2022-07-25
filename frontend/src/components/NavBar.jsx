import { Container, Navbar } from 'react-bootstrap'

export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Bank</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

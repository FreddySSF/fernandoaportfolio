import './Navbar.css';
import { Nav } from 'react-bootstrap';


function Navbar() {

    return (
        
    <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} >
      <Nav.Item>
        <Nav.Link href="/home">Fernando Aguilar's Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Skills</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">About Me</Nav.Link>
      </Nav.Item>
    </Nav>
        
    );
}

export default Navbar;

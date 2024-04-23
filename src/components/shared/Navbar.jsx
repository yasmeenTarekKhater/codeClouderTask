import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './css/Navbar.css';

import setting from '../../assets/icons/settings.png';
import notification from '../../assets/icons/Notification.png';
import profile from '../../assets/images/IMG.png';
import search from '../../assets/icons/light.png';
import TextInput from '../form/TextInput';

function MyNavbar() {
  return (
    <Navbar expand="md" className='myNav'>
      <Container fluid>
          <div className='d-flex align-items-center seachInputNav'>
          <img src={search} alt='search'/>
          <TextInput customClass='searchNavbar' placeholderText='Search or write acommand'/>
          </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/setting"><img src={setting} alt="setting"/></Nav.Link>
            <Nav.Link href="/notifigation"><img src={notification} className='notifigationImg' alt="notification"/></Nav.Link>
            <Nav.Link href="/profile"><img src={profile} alt="profile"/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Button, Navbar } from "react-bootstrap";
import NavDropdown from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaWallet } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import "./Header.css";

function Header() {
  return (
    <>
      <header class="header-one">


        <div class="topbar-area">
          <div class="container">
            <div class="row">
              <div class=" col-md-8 col-sm-8 col-xs-12">
                <div class="topbar-left">
                  <ul>
                    <li><a href="https://www.uletron.com/" target="_blank"><i class="fa fa-envelope"></i> info@ulrtron.com</a></li>
                    {/* <li><a href="#"><i class="fa fa-clock-o"></i> Live support</a></li> */}
                  </ul>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-12 d-flex justify-content-center ">
                <div class="topbar-right">
                  {/* <select class="select d-inline-block">
                              <option>Eng</option>
                              <option>Esp</option>
                              <option>Fra</option>
                              <option>Deu</option>
                          </select>  */}
                  <ul className="header_ul" >
                    
                    <li>
                    <Link to="/login" className="Styelnone">
                      <a className="top_aa" ><img src="login.png" alt="" />Login</a>
                      </Link>
                      </li>

                    <li>
                    <Link to="/registration" className="Styelnone">
                      <a className="top_aa" ><img src="login.png" alt="" />Register</a>
                      </Link>
                      
                      </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        <Navbar className="nev nav_bar" collapseOnSelect expand="lg" >
          <Container>
            <Navbar.Brand className="home">
              <Link to="/">
                <img src="assets/images/logo.png" alt="" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle>
              <AiOutlineMenu className="text-white"></AiOutlineMenu>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className=" alna">
                <Nav.Link className="hxn text-white">
                  <Link to="/" className="Styelnone">Home</Link>
                </Nav.Link>
                <Nav.Link className="hxn text-white">
                  <Link to="/About_main" className="Styelnone">About Us</Link>
                </Nav.Link>
                <Nav.Link href="#tokenomics" className="hxn text-white">
                  <Link to="/Explore_main" className="Styelnone">FAQ</Link>
                </Nav.Link>
                <Nav.Link href="#how_to_play" className="hxn text-white">
                  <Link to="/Contact_main" className="Styelnone">Contacts</Link>
                </Nav.Link>
              </Nav>  
              <Nav className="mt-2 emn">
                <Nav.Link className="text-white">
                  <Link to="/login" className="Styelnone">
                    <Button className="login_bttn">LOGIN</Button>
                  </Link>
                </Nav.Link>

                <Nav.Link  className="text-white">
                  <Link to="/registration" className="Styelnone">
                    <Button className="login_bttn">REGISTER</Button>
                  </Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to="/login" className="Styelnone">
                    {/* <img src="./Assets/metamask.png" width="40px" alt="" /> */}
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div class="col-12">
                        <div class="mobile-menu"></div>
                    </div>
      </header>
    </>

  );
}

export default Header;

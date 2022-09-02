import React from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../access/img/logo.jpg";
import "./style.scss";
function Header() {
  // Default list odd movie
  const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];

  // Default list series movie
  const phimBo = [
    { name: "Phim bộ Anh", name_URL: "anh" },
    { name: "Phim bộ Hàn Quốc", name_URL: "han-quoc" },
    { name: "Phim bộ Mỹ", name_URL: "my" },
    { name: "Phim bộ Trung Quốc", name_URL: "trung-quoc" },
    { name: "Phim bộ Nhật Bản", name_URL: "anh" },
    { name: "Phim bộ Thái Lan", name_URL: "han-quoc" },
  ];

  const countries = [
    { name: "Anh", name_URL: "anh" },
    { name: "Hàn Quốc", name_URL: "han-quoc" },
    { name: "Mỹ", name_URL: "my" },
    { name: "Trung Quốc", name_URL: "trung-quoc" },
    { name: "Nhật Bản", name_URL: "anh" },
    { name: "Thái Lan", name_URL: "han-quoc" },
  ];

  const genres = [
    { name: "Hành động", name_URL: "hanh-dong" },
    { name: "Tình cảm", name_URL: "tinh-cam" },
    { name: "Hài hước", name_URL: "hai-huoc" },
  ];

  return (
    <div className="header">
      <Navbar bg="light" expand="lg" className="menu-top">
        <Container>
          <Navbar.Brand href="#home">Phim 247</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="main-menu">
              <NavDropdown
                title="Phim lẻ"
                id="phimle-dropdown"
                className="nav-dropdown-item"
              >
                {years.map((item, index) => {
                  return (
                    <Link
                      to={`/phim-le/${item}`}
                      type_movie="phimle"
                      year={item}
                      key={index}
                      className="dropdown-item"
                    >
                      Phim lẻ {item}
                    </Link>
                  );
                })}
              </NavDropdown>
              <NavDropdown
                title="Phim bộ"
                id="phimbo-dropdown"
                className="nav-dropdown-item"
              >
                {phimBo.map((item, index) => {
                  return (
                    <Link
                      to={`/phim-bo/${item.name_URL}`}
                      type_movie="phimbo"
                      key={index}
                      className="dropdown-item"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </NavDropdown>
              <NavDropdown
                title="Quốc gia"
                id="quociga-dropdown"
                className="nav-dropdown-item"
              >
                {countries ? (
                  countries.map((item, index) => {
                    return (
                      <Link
                        to={`/quoc-gia/${item.name_URL}`}
                        key={index}
                        className="dropdown-item"
                      >
                        {item.name}
                      </Link>
                    );
                  })
                ) : (
                  <></>
                )}
              </NavDropdown>
              <NavDropdown
                title="Thể loại"
                id="theloai-dropdown"
                className="nav-dropdown-item"
              >
                {genres ? (
                  genres.map((item, index) => {
                    return (
                      <Link
                        to={`/the-loai/${item.name_URL}`}
                        key={index}
                        className="dropdown-item"
                      >
                        {item.name}
                      </Link>
                    );
                  })
                ) : (
                  <></>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;

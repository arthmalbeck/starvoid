import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../config/auth/useAuth";
import './Navbar.css'
import { Button } from "reactstrap";
import logo from '../../../assets/imgs/starvoid.png';

const Navbar = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <header id="main-header">
      <div className="header-content">
        <img src={logo} alt="this is a logo image" style={{ height:'55px'}}/>
        <div>
          <Button color="warning" onClick={() => [signout(), navigate("/")]}>Sign Out</Button>
        </div>
      </div>
    </header>
    </React.Fragment>
  );
}

export default Navbar
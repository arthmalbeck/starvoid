import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../config/auth/useAuth";
import {
  Card,
  CardBody,
	Label,
  Button,
	Input
} from 'reactstrap';
import logo from '../../assets/imgs/starvoid.png';
import video from "../../assets/videos/Tunnel - 87660.mp4";
import VideoBG from "../../components/common/VideoBG";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !password) {
      setError("Fill in all fields");
      return;
    }

    const res = signin(email, password);

    if (res) {
      setError(res);
			console.log(res)
      return;
    }

    navigate("/home");
  };

	return (
		<>
			<VideoBG source={video}/>
			<div className="login-container ">
				<Card className="login-card card-dark">
					<CardBody>
						<div className="login-img">
							<img src={logo} alt="this is a logo image" style={{ height:'100px'}}/>
						</div>
						<div>
							<Label>Email</Label>
							<Input
								type="email"
								placeholder="Enter your email address"
								value={email}
								onChange={(e) => [setEmail(e.target.value), setError("")]}
							/>
						</div>
						<div>
							<Label>Password</Label>
							<Input
								type="password"
								placeholder="Enter your password"
								value={password}
								onChange={(e) => [setPassword(e.target.value), setError("")]}
							/>
						</div>
						<div>
							New user?
							<Link to="/signup">&nbsp;Create an account.</Link>
						</div>
						<div className="login-subimit">
							<Button onClick={handleLogin} >
								Sign in
							</Button>
						</div>
						<div className="error-container">
							{error}
						</div>
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default Signin;
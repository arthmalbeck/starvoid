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
import video from "../../assets/videos/Tunnel - 73098.mp4";
import VideoBG from "../../components/common/VideoBG";

const Signup = () => {

	const [email, setEmail] = useState("");
	const [emailConf, setEmailConf] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const { signup } = useAuth();

	const handleSignup = () => {
		if (!email | !emailConf | !password) {
			setError("Fill in all fields");
			return;
		} else if (email !== emailConf) {
			setError("Emails are not the same");
			return;
		}

		const res = signup(email, password);

		if (res) {
			setError(res);
			return;
		}

		alert("User registered successfully!");
		navigate("/");
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
							<Label>Email Confirmation</Label>
							<Input
								type="email"
								placeholder="Enter your email address"
								value={emailConf}
								onChange={(e) => [setEmailConf(e.target.value), setError("")]}
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
							Already have an account?
							<Link to="/">&nbsp;Sign in.</Link>
						</div>
						<div className="login-subimit">
							<Button onClick={handleSignup} >
								Sign up
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

export default Signup;
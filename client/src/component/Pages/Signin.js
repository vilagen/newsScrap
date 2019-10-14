import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap"
import './style.css'

class SignIn extends Component {

	state = {
		username: "",
		password: "",
	}

		render() {
        return (

            <div>

							<div className="centerPage">

								<Card style={{ width: '20rem' }}>

								<Card.Body>
								<Form>

								<Form.Group controlId="formBasicEmail">
										<Form.Label className="d-flex justify-content-start">Username</Form.Label>
										<Form.Control 
										type="text" 
										placeholder="Username"
										onChange={ (event) => {this.setState({name: event.target.value}); console.log(this.state.username)} }
										/>
								</Form.Group>

								<Form.Group controlId="formBasicPassword">
										<Form.Label className="d-flex justify-content-start">Password</Form.Label>
										<Form.Control 
										type="password" 
										placeholder="Password" 
										onChange={ (event) => {this.setState({name: event.target.value}); console.log(this.state.username)} }
										/>
								</Form.Group>

								<div className="spaceBetweenDiv">
								<Button variant="primary" type="submit">
										Login
								</Button>

								<Button variant="primary" type="submit">
										Sign Up
								</Button>
								</div>

								</Form>

								</Card.Body>
								</Card>    

						</div>

          </div>

        )
    }
}

export default SignIn
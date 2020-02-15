import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap"
import './style.css'

class SignUp extends Component {

	state = {
		username: "",
		email: "",
		password: "",
		password2: ""
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

								<Form.Group controlId="formBasicEmail">
										<Form.Label className="d-flex justify-content-start">Email address</Form.Label>
										<Form.Control 
										type="email" 
										placeholder="Email"
										onChange={ (event) => {this.setState({name: event.target.value}); console.log(this.state.email)} }
										/>
								</Form.Group>

								<Form.Group controlId="formBasicPassword">
										<Form.Label className="d-flex justify-content-start">Password</Form.Label>
										<Form.Control 
										type="password" 
										placeholder="Password" 
										onChange={ (event) => {this.setState({name: event.target.value}); console.log(this.state.password)} }
										/>
								</Form.Group>

								<Form.Group controlId="formBasicPassword">
										<Form.Label className="d-flex justify-content-start">Password</Form.Label>
										<Form.Control 
										type="password" 
										placeholder="Password" 
										onChange={ (event) => {this.setState({name: event.target.value}); console.log(this.state.password2)} }
										/>
								</Form.Group>

								<div>
								<Button variant="primary" type="submit">
										Submit
								</Button>
								
								<span class="mr-2"></span>

								<Button variant="primary" type="submit">
										Return
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

export default SignUp
import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import  Column from "../component/Column";
import Header from "../component/Header";
import API from "../APIs/API"
import './style.css'

class Home extends Component {

	state = {
		nytResults: []
	}

	nprSearch = () => {
		API.searchNPR()
		.then( (res) =>
		this.setState({ nytResults: res})
		)
		console.log(this.state.nytResults)
    }

	render() {
		return (
			<div>

				<Header></Header>

				<Row>

					<Col xs={12}>

						<div id="jumboBox">

							<div className="vertAlign">
								<p id="scrap"> SCRAP </p>
								<h5 id="scrap2">A Site For Your News</h5>
							</div>

						</div>

					</Col>
		
				</Row>


				<Container>

					<Row style= {{height: "100vh", marginTop: "5vh" }}>

		

						<Col xs={4}>
							
							<button
							onClick={this.nprSearch}>
							<Column></Column>
							</button>

						</Col>

						<Col className="" xs={4}>

							<div id="politics">

							<p>This is a test.</p>

							</div>

						</Col>

						<Col className="" xs={4}>

							<div id="politics"></div>

						</Col>

						
					</Row>

				</Container>

			</div>
		)
	}
}

export default Home
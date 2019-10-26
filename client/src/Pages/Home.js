import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import  Column from "../component/Column";
import './style.css'

class Home extends Component {

	state = {

	}

	render() {
		return (
			<div>

				<Row>

					<Col xs={12}>

						<div id="jumboBox">
	
							<h5 className="topPage" style={{ color: 'white'}}>Login</h5>

							<div className="vertAlign">
								<p id="scrap"> SCRAP </p>
								<h5 id="scrap2">A Site For Your News</h5>
							</div>

						</div>

					</Col>
		
				</Row>



				<Row style= {{height: "100vh"}}>

					<Column></Column>

					<Col className="padding-0" xs={4}>

						<div id="politics">

						<p>This is a test.</p>

						</div>

					</Col>

					<Col className="padding-0" xs={4}>

						<div id="politics"></div>

					</Col>
					
				</Row>
			
			</div>
		)
	}
}

export default Home
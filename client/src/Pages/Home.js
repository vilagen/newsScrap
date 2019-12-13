import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import  Column from "../component/Column";
import Header from "../component/Header";
import API from "../APIs/API"
import './style.css'

class Home extends Component {

	state = {
		news: []
	}

	newsSearch = () => {
		API.newsSearch()
		.then( res => this.setState({news: res.data}))
			.catch(err => console.log(err))
	};
	
	consoleThis = () => {
		console.log(this.state.news);
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




				<Row style= {{height: "80vh"}}>

					<Col xs={1}>
											
						<Column
						onClick={this.newsSearch}
						onClick2={this.consoleThis}>
						</Column>
				
					</Col>
					
				</Row>



			</div>
		)
	}
}

export default Home
import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import  Column from "../component/Column";
import Header from "../component/Header";
import { NewsList, NewsListItem } from "../component/NewsList";
import API from "../APIs/API"
import './style.css'

class Home extends Component {

	state = {
		currentNews: []
	};

	newsSearch = () => {
		API.newsSearch()
		.then( res => this.setState({currentNews: res.data.articles}))
			.catch(err => console.log(err));
	};

	// newsSearch = () => {
	// 	fetch('api/currentnews')
	// 	.then( res=> this.setState({ news: res }))
	// };
	
	consoleThis = () => {
		console.log(this.state.currentNews);
	}

	render() {

		let newsButtonStyle = {
			height: "10vh",
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			textAlign: "center",
			backgroundColor: "yellow",
    };

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

				<Row style={newsButtonStyle}>

					<Col xs={12}>

						<button style={{color:"dodgerblue"}}				
						onClick={this.newsSearch}>
							Current News
						</button>
						
					</Col>
				
				</Row>

					<Row>

					<Col xs={12}>

						<NewsList>
							{this.state.currentNews.map( (news, i) => (
								<NewsListItem
									key={i}
									source={news.source.id}
									author={news.author}
									title={news.title}
									image={news.urlToImage}
									description={news.description}
									url={news.url}
									published={news.published}
									/>
								)
							)};
						</NewsList>

					</Col>
					
				</Row>




			</div>
		)
	}
}

export default Home
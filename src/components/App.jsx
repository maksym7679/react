import React, { Component } from "react";
import { hot } from 'react-hot-loader/root';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import Todo from './Todo'

import '../styles/App.css';

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			items: [],
			text: ''
		};
		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		return (
			<div className="pt-5">
				<Container>
					<Row>
						<Col xs lg="6">
		
							<Todo items={this.state.items} />
							<Form onSubmit={this.handleSubmit} className="mt-4">
								<Form.Group controlId="new-todo">
									<Form.Label>What to do?</Form.Label>
									<Form.Control 
										type="text" 
										onChange={this.handleChange} 
										value={this.state.text} 
									/>
								</Form.Group>
								<p>Input: {this.state.text}</p>
								<Button variant="primary" type="submit">
									Submit
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}

	handleChange(e) {
		this.setState({
			text: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		
		if(!this.state.text.length) {
			return;
		}

		const newItem = {
			text: this.state.text,
			id: Date.now()
		};
		
		this.setState(state => ({
			items: state.items.concat(newItem),
			text: ''
		}));
		console.log(this.state)
	}

}

export default hot(App);
import React from 'react'
import ReactJson from 'react-json-view'

class ErrorDetails extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log(this.props.details)
		// prettier-ignore
		const header = `ID: ${this.props.details.id}. Level: ${this.props.details.level}. Timestamp: ${this.props.details.timestamp}`
		return (
			<>
				<p className='error-details'>{header}</p>
				<ReactJson src={this.props.details} />
			</>
		)
	}
}

export default ErrorDetails

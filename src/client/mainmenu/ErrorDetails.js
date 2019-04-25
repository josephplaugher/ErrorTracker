import React from 'react'

class ErrorDetails extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		// prettier-ignore
		const header = `ID: ${this.props.details.id}. Level: ${this.props.details.level}. Timestamp: ${this.props.details.timestamp}`
		return (
			<>
				<p className='error-details'>{header}</p>
				<p className='error-details'>{this.props.details.message}</p>
			</>
		)
	}
}

export default ErrorDetails

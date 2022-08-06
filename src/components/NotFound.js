import React from 'react'

class NotFound extends React.Component {
	render() {
		return (
			<ul>
				<li className="not-found">
					<h3>No Results Found</h3>
					<p>Your search did not return any results. Please try again.</p>
				</li>
			</ul>
		);
	}
}

export default NotFound;
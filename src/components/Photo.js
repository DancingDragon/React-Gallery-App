import React from 'react'

class Photo extends React.Component {
	
	
	render() {
		return (
			<li>
				<img src={this.props.src} alt="" />
			</li>
		);
	}
}

export default Photo;
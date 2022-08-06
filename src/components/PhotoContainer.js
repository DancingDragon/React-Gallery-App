import React from 'react'
import { withRouter } from 'react-router';
import Photo from './Photo'

class PhotoContainer extends React.Component {
	query = "";
	
	componentDidUpdate() {
		let newQuery = this.props.match.params.query
		if (newQuery != this.query) {
			this.query = newQuery;
			this.props.fetchPhotoUrls(this.query);
		}
	}
	
	componentDidMount() {
		this.query = this.props.match.params.query;
		this.props.fetchPhotoUrls(this.query)
		
	}
	
	render() {
		return (
			<div className="photo-container">
				<h2>Results</h2>
					<ul>
						{this.props.photos.map( (ph, ind) => 
						<Photo src={ph} key={ind} />
						)}
					</ul>
					
				
			</div>
		);
	}
}

export default withRouter(PhotoContainer);
import React from 'react'
import { withRouter } from 'react-router';
import Photo from './Photo'
import NoMatches from './NoMatches'

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
		if (this.props.loading) {
			return (
				<p>Loading...</p>
			);
		} else {
			if (this.props.photos.length > 0) {
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
			} else {
				return (
					<NoMatches />
				);
			}
		}
	}
}

export default withRouter(PhotoContainer);
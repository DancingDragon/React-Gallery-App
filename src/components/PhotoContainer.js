import React from 'react'
import { withRouter } from 'react-router';
import Photo from './Photo'
import NoMatches from './NoMatches'

class PhotoContainer extends React.Component {
	query = "";
	
	componentDidUpdate() {
		//Check if the query has changed and fetch new photos
		let newQuery = this.props.match.params.query
		if (newQuery !== this.query) {
			this.query = newQuery;
			this.props.fetchPhotoUrls(this.query);
		}
	}
	
	componentDidMount() {
		//update the images as soon as the component mounts
		this.componentDidUpdate();
	}
	
	render() {
		//If the images are still loading
		if (this.props.loading) {
			return (
				<p>Loading...</p>
			);
		} else {
			//if urls were found
			if (this.props.photos.length > 0) {
				return (
					<div className="photo-container">
						<h2>Results</h2>
							<ul>
								{
									//Map pver the urls and create photocomponents
									//Key is just the index of the url in the photos array
									this.props.photos.map( (ph, ind) => 
									<Photo src={ph} key={ind} />)
								}
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
import React from 'react'
import './index.css'
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect
} from 'react-router-dom'

import apiKey from './config'

//React Cpmponents
import Nav from './components/Nav'
import PhotoContainer from './components/PhotoContainer'
import SearchForm from './components/SearchForm'
import NotFound from './components/NotFound'





class App extends React.Component {
	
	//Using constructor to set inital state
	constructor() {
		super();
		this.state = {
			photos:[]
		};
	}
	
	fetchPhotoUrls = async (searchTerm) => {
		//set loading to true while fetching imageurls
		this.setState((prevState) => ({loading:true}));
		const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`;
		const res = await fetch(url);
		const data = await res.json();
		//Map over the photo json objects to get teh corresponding url
		const urls = data.photos.photo.map((photo) => `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`);
		
		this.setState((prevState) => ({photos:urls, loading:false}));
	}
	
	render() {
		return (
			<BrowserRouter>
				<div className="container">
					//search UI components
					<SearchForm />
					<Nav />
					
					//Switch to only show first match
					<Switch>
						//Let homescreen redirect to catssearch
						<Route exact path="/"> <Redirect to="/search/cats" /> </Route>
						//Show photocontainer
						<Route path="/search/:query"> 
							<PhotoContainer 
								photos={this.state.photos} 
								loading={this.state.loading} 
								fetchPhotoUrls={this.fetchPhotoUrls}/> 
						</Route>
						//404 if url not matched
						<Route path="*" > <NotFound /> </Route>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}


export default App;

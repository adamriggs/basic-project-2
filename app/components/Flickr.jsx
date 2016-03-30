import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import {keys} from './keys/keys.json';
import Masonry from 'react-masonry-component';


class Flickr extends React.Component {


	constructor(props) {
		console.log('Flickr.constructor()');
		super(props);

	}

	componentWillMount() {
		console.log('Flickr.componentWillMount()');

		this.setState({
			pics: []
		});

	}

	componentDidMount() {
		console.log('Flickr.componentDidMount()');
		$.get(keys.url, (data)=>this.handleData(data));

	}

	handleData(data) {
		console.log('Flickr.handleData()');
		let pics = data.photos.photo;

		//console.log(pics);

		let uris = [];

		for( let i = 0; i < pics.length; i++) {
			uris.push("https://farm"+ pics[i].farm +".static.flickr.com/"+ pics[i].server +"/"+ pics[i].id +"_"+ pics[i].secret +"_z.jpg");
		}

		this.setState({
			pics: pics
		});
	}

	render() {
		console.log('Flickr.render()');

		let imgs = this.state.pics.map( (val, index, arr)=> {

			let imgurl = "https://farm"+ val.farm +".static.flickr.com/"+ val.server +"/"+ val.id +"_"+ val.secret +"_z.jpg";
			let pageurl = "https://www.flickr.com/photos/" + val.owner + "/" + val.id;

			//return <a class="masonry-item" href={pageurl} key={index}><img className="flickr-pic image-element-class" src={imgurl} key={index} /></a>
			return <div className="masonry-item" key={index}><a href={pageurl}><img className="flickr-pic image-element-class" src={imgurl} key={index} /></a></div>
		});

		let masonryOptions = {
		    transitionDuration: '1s',
		    columnWidth: '.flickr-pic',
		    percentPosition: true
		};

		return (

			<Masonry
                className={'masonry-div'} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
            >
            	<div className="grid-sizer"></div>
				{imgs}
			</Masonry>

		);
	}
}

export default Flickr;

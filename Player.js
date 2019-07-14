import React from 'react';
import PlayIcon from 'mdi-react/PlayIcon';
import PauseIcon from 'mdi-react/PauseIcon'


export class Player extends React.Component{

	constructor(props){
		super(props)
		this.state = {playing: false}
		this.handlePlayClick = this.handlePlayClick.bind(this);
	}


	handlePlayClick(){
		if (this.state.playing){
			this.setState({playing: false});
		}

		else{
			this.setState({playing: true})	
		}

	}


	render(){

		return(
			<button onClick = {this.handlePlayClick}>

			{this.state.playing? 
			<PauseIcon /> : 
			<PlayIcon />}
			
			</button>
			
			);
	}  

}

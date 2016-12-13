import React from 'react';
import ReactDOM from 'react-dom';

var LikeButton = React.createClass({
	getInitialState : function(){
		return {liked : false};
	},
	handleClick : function(){
		return this.setState({liked : !this.state.liked});
	},
	render : function(){
		var text = this.state.liked? 'liked' : 'haven\'t like';
		return (
			<p onClick={this.handleClick}>
				Your {text} this. Clikc to toggle.
			</p>
		);
	}
});

ReactDOM.render(<LikeButton />,document.getElementById("dynamic-ui"));
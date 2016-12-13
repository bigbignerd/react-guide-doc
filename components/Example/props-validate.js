import React from 'react';
import ReactDOM from 'react-dom';

var El = React.createClass({
	render : function(){
		return (<div>王</div>);
	}
});
var MyComponent = React.createClass({
	propTypes : {
    	children : React.PropTypes.element.isRequired
  	},
	render : function(){
		return (
			<div>{this.props.children}</div>
		);
	}
});

ReactDOM.render(<MyComponent children={<El />} />,document.getElementById("validate"));
import React from 'react';
import ReactDOM from 'react-dom';

var RefsDemo = React.createClass({
	handleClick : function(){
		this.myTextInput.focus();
		this.myTextInput.value = 'focus';
	},
	render : function(){
		/*input 初始化时将自己的ref赋值给myTextInput*/
		return (
			<div>
				<input type="text" ref={(ref) => this.myTextInput = ref} />
				<input type="button" value="focus the input text" onClick={this.handleClick} />
			</div>
		);
	}
});

ReactDOM.render(<RefsDemo />,document.getElementById("refs"));


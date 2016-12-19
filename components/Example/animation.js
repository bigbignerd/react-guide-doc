import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var TodoList = React.createClass({
	getInitialState : function(){
		return {'items' : ['Hello','World','click','here']};
	},
	handleAdd : function(){
		var newItems = this.state.items.concat([prompt('Enter some text')]);
		this.setState({"items" : newItems });
	},
	handleRemove : function(i){
		var newItems = this.state.items.slice();
		newItems.splice(i,1);
		this.setState({"items" : newItems});
	},
	render : function(){
		// return	 (
		// 		<div key={item} onClick={this.handleRemove.bind(this,i)} >
		// 			{item}
		// 		</div>
		// 	);
		var items = this.state.items.map(function(item , i){
			return (
		        <div key={item} onClick={this.handleRemove.bind(this, i)}>
		          <ReactCSSTransitionGroup transitionName="example">
		            {item}
		          </ReactCSSTransitionGroup>
		        </div>
		      );
		}.bind(this));
		/**<div>
			<button onClick={this.handleAdd} >Add Item</button>
			<ReactCSSTransitionGroup transitionName="example"  >
				{items}
			</ReactCSSTransitionGroup>
		</div>
		<div>
			<p>Example with load animation at dom initial</p>
			<ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>
				<h1>Fading at Initial Mount</h1>
			</ReactCSSTransitionGroup>
		</div>
		*/
		return (
	      	<div>
		        <button onClick={this.handleAdd}>Add Item</button>
		        {items}
	     	 </div>
	    );
	}
});


ReactDOM.render(<TodoList />,document.getElementById('animation'));





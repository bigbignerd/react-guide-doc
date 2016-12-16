import React from 'react';
import ReactDOM from 'react-dom';

var El = React.createClass({
	getDefaultProps : function(){
		return {
			default : 'props default value'			
		}
	},
	render : function(){
		return (
			<div>
				<h1>默认 Prop 值 <br /></h1>
				<h2>//复制父级所有的属性 ...this.props<br /></h2>
				<a {...this.props}>{this.props.default}</a>
			</div>
			
		);
	}
});
var MyComponent = React.createClass({
	/**
	 * props验证
	 */
	propTypes : {
    	children : React.PropTypes.element.isRequired//验证children属性必须是一个React元素
  	},
  	/** 设置默认属性值 */
  	getDefaultProps : function(){
  		return {
  			'children' : <El href="test.html" style={{color:"red"}} />
  		};
  	},
	render : function(){
		return (
			<div>{this.props.children}</div>
		);
	}
});
//Mixins测试
/**
 * 需要在多个组件中复用的东西可以定义为一个mixin
 * 以便直接在不同的组件中使用
 */
var SetIntervalMixin = {
	componentWillMount : function(){
		this.intervals = [];
	},
	setInterval : function(){
		this.intervals.push(setInterval.apply(null,arguments));
	},
	componentWillUnMount : function(){
		this.intervals.forEach(clearInterval);
	}
};
var TickTock = React.createClass({
	mixins : [SetIntervalMixin],
	getInitialState : function(){
		return {
			seconds : '0'
		}
	},
	componentDidMount : function(){
		this.setInterval(this.tick,1000);
	},
	tick : function(){
		this.setState({seconds : parseInt(this.state.seconds) + 1});
	},
	render : function(){
		return (
			<p>
	        	React has been running for {this.state.seconds} seconds.
	      	</p>
		);
	}
});
ReactDOM.render(<TickTock />,document.getElementById("tick-tock"));	
ReactDOM.render(<MyComponent />,document.getElementById("validate"));






